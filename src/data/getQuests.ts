import { EntityTypes } from "types/Research";
import { IQuest, QuestClaimType, QuestStatus } from "../types/Quest";
import { sortByRank } from "../utils/sortByRank";
import { adventurersByPartyId } from "./queries/adventurers";
import { clansById } from "./queries/clans";
import { researchByTag } from "./queries/research";
import { rawQuests, IRawQuest, IRawQuestParty } from "./raw/quests";
import { CURRENT_WEEK } from "config";

export function getQuests(): IQuest[] {
  const temporallyAccurateQuests = rawQuests.filter(
    (q) => q.postedWeek <= CURRENT_WEEK,
  );
  const compositeQuests: IQuest[] = formatQuests(temporallyAccurateQuests);
  return compositeQuests;
}

export function getQuestsByClanId(clanId: string): IQuest[] {
  const clanQuests = rawQuests.filter((q) => {
    const isClanQuest = q.claimType === QuestClaimType.Clan;
    const isClaimedByClan = !!q.parties.find((p) => p.clanId === clanId);
    return isClanQuest && isClaimedByClan;
  });
  return formatQuests(clanQuests);
}

function formatQuests(unformattedQuests: IRawQuest[]): IQuest[] {
  return unformattedQuests.map((q) => {
    const research = researchByTag[EntityTypes.Quest][q.id] || [];
    const activeParty = q.parties.filter(
      (p) => p.status !== QuestStatus.Failed,
    )[0];
    const claimedByName = determineClaimedByName(q, activeParty);
    const questStatus = determineStatus(q);
    const compositeParties = q.parties.map((p) => {
      return {
        ...p,
        questId: q.id,
        adventurers: adventurersByPartyId[p.id],
        metrics: p.metrics.map((m) => ({ ...m, questPartyId: "PLACEHOLDER" })),
      };
    });

    return {
      ...q,
      claimedByName,
      status: questStatus,
      parties: compositeParties,
      research,
    };
  });
}

function determineClaimedByName(quest: IRawQuest, party?: IRawQuestParty) {
  const defaultName = "Nobody";
  if (!party) return defaultName;
  if (quest.claimType === QuestClaimType.Clan) {
    if (!party.clanId) return defaultName;
    return clansById[party.clanId].name || defaultName;
  }
  const adventurers = adventurersByPartyId[party.id];
  if (!adventurers) return defaultName;
  const highestRankedAdventurer = sortByRank(adventurers)[0];
  return highestRankedAdventurer.name;
}

function determineStatus(quest: IRawQuest): QuestStatus {
  const { parties, expireWeek } = quest;
  const isExpired = expireWeek && expireWeek < CURRENT_WEEK;
  const successParty = parties.find((p) => p.status === QuestStatus.Success);

  if (successParty) return QuestStatus.Success;

  if (isExpired) {
    if (!parties.length) return QuestStatus.Expired;
    return QuestStatus.Failed;
  }

  const thisWeekParties = parties.filter((p) => p.startWeek === CURRENT_WEEK);
  if (!thisWeekParties.length) return QuestStatus.Unclaimed;
  if (thisWeekParties.length === 1) return thisWeekParties[0].status;
  return QuestStatus.Claimed;
}
