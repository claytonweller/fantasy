import { IRawQuest } from "data/raw/quests";
import { shuffleArray } from "./shuffleArray";

export function shuffleQuestsByWeek(quests: IRawQuest[]): IRawQuest[] {
  const separated: { [week: number]: IRawQuest[] } = {};
  quests.forEach((q) => {
    const { postedWeek, expireWeek } = q;
    const weekBucket = expireWeek || postedWeek;
    if (!separated[weekBucket]) separated[weekBucket] = [];
    separated[weekBucket].push(q);
  });
  const shuffled = Object.entries(separated)
    .map(([_, quests]) => shuffleArray(quests))
    .sort((a, b) => b[0].postedWeek - a[0].postedWeek);

  return shuffled.flat();
}
