import { AdventurerRaces } from "types/Adventurer";
import {
  IDbRoster,
  IDbRosterPick,
  RosterPickTypes,
  RosterPositions,
} from "types/Roster";
import { IDbVillager } from "types/Villager";

export interface IRawVillager extends IDbVillager {
  rosters: IRawRoster[];
}

export interface IRawRoster extends Omit<IDbRoster, "id" | "villagerId"> {
  picks: IRawRosterPick[];
}

export interface IRawRosterPick
  extends Omit<IDbRosterPick, "id" | "rosterId"> {}

export const rawVillagers: IRawVillager[] = [
  {
    id: "v1",
    name: "Angus Jeter",
    playerName: "Wilder",
    profession: "Changeless restaurateur",
    races: [AdventurerRaces.Dwarf],
    rosters: [
      // {
      //   week: 1,
      //   picks: [
      //     {
      //       pickId: "c1",
      //       pickType: RosterPickTypes.Clan,
      //       position: RosterPositions.Clan,
      //     },
      //     {
      //       pickId: "a15",
      //       pickType: RosterPickTypes.Adventurer,
      //       position: RosterPositions.A,
      //     },
      //     {
      //       pickId: "a9",
      //       pickType: RosterPickTypes.Adventurer,
      //       position: RosterPositions.B1,
      //     },
      //     {
      //       pickId: "a14",
      //       pickType: RosterPickTypes.Adventurer,
      //       position: RosterPositions.B2,
      //     },
      //     {
      //       pickId: "a5",
      //       pickType: RosterPickTypes.Adventurer,
      //       position: RosterPositions.C1,
      //     },
      //     {
      //       pickId: "a13",
      //       pickType: RosterPickTypes.Adventurer,
      //       position: RosterPositions.C2,
      //     },
      //     {
      //       pickId: "a23",
      //       pickType: RosterPickTypes.Adventurer,
      //       position: RosterPositions.C3,
      //     },
      //   ],
      // },
    ],
  },
  {
    id: "v2",
    name: "Melody",
    playerName: "Catie",
    profession: "Busybody stage mistress",
    races: [AdventurerRaces.Human],
    rosters: [],
  },
  {
    id: "v3",
    name: "Tizquik",
    playerName: "Dan",
    profession: "Temporarily between everything",
    races: [AdventurerRaces.Dwarf],
    rosters: [],
  },
  {
    id: "v4",
    name: "Morgeal Thunderbottom",
    playerName: "Sophie",
    profession: "Bog scraper (aspiring comfort woman)",
    races: [AdventurerRaces.Human],
    rosters: [],
  },
  {
    id: "v5",
    name: "Gartock Bloodthorn",
    playerName: "Adam",
    profession: "Watchmaker apprentice (gear boy)",
    races: [AdventurerRaces.Orc],
    rosters: [],
  },
  {
    id: "v6",
    name: 'Jake "The Snake" Charmer',
    playerName: "Jake",
    profession: "Pest remover/depositor",
    races: [AdventurerRaces.Human],
    rosters: [],
  },
  {
    id: "v7",
    name: "Kaleidoscope Luminsdotter",
    playerName: "Courtney",
    profession: "Stained glass craftsman (3rd apprentice)",
    races: [AdventurerRaces.Human],
    rosters: [],
  },
];
