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
      {
        week: 1,
        picks: [
          {
            pickId: "c6",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a29",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a22",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a9",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a46",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a3",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a5",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
      {
        week: 2,
        picks: [
          {
            pickId: "c9",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a45",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a22",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a51",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a19",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a1",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a64",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
    ],
  },
  {
    id: "v2",
    name: "Melody",
    playerName: "Catie",
    profession: "Busybody stage mistress",
    races: [AdventurerRaces.Human],
    rosters: [
      {
        week: 1,
        picks: [
          {
            pickId: "c6",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a22",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a9",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a28",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a27",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a46",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a42",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
      {
        week: 2,
        picks: [
          {
            pickId: "c3",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a8",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a11",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a9",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a52",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a27",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a42",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
    ],
  },
  {
    id: "v3",
    name: "Tizquik",
    playerName: "Dan",
    profession: "Temporarily between everything",
    races: [AdventurerRaces.Dwarf],
    rosters: [
      {
        week: 1,
        picks: [
          {
            pickId: "c6",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a61",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a9",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a21",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a63",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a52",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a58",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
      {
        week: 2,
        picks: [
          {
            pickId: "c3",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a15",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a14",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a2",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a19",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a41",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a28",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
    ],
  },
  {
    id: "v4",
    name: "Morgeal Thunderbottom",
    playerName: "Sophie",
    profession: "Bog scraper (aspiring comfort woman)",
    races: [AdventurerRaces.Human],
    rosters: [
      {
        week: 1,
        picks: [
          {
            pickId: "c8",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a9",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a22",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a19",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a29",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a13",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a60",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
      {
        week: 2,
        picks: [
          {
            pickId: "c3",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a15",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a2",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a14",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a19",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a63",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a31",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
    ],
  },
  {
    id: "v5",
    name: "Gartock Bloodthorn",
    playerName: "Adam",
    profession: "Watchmaker apprentice (gear boy)",
    races: [AdventurerRaces.Orc],
    rosters: [
      {
        week: 1,
        picks: [
          {
            pickId: "c8",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a22",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a21",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a61",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a28",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a34",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a45",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
      {
        week: 2,
        picks: [
          {
            pickId: "c9",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a15",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a51",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a9",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a7",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a28",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a45",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
    ],
  },
  {
    id: "v6",
    name: 'Jake "The Snake" Charmer',
    playerName: "Jake",
    profession: "Pest remover/depositor",
    races: [AdventurerRaces.Human],
    rosters: [
      {
        week: 1,
        picks: [
          {
            pickId: "c5",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a61",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a9",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a22",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a37",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a46",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a38",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
      {
        week: 2,
        picks: [
          {
            pickId: "c3",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a15",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a9",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a51",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a46",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a4",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a49",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
    ],
  },
  {
    id: "v7",
    name: "Kaleidoscope Luminsdotter",
    playerName: "Courtney",
    profession: "Stained glass craftsman (3rd apprentice)",
    races: [AdventurerRaces.Human],
    rosters: [
      {
        week: 1,
        picks: [
          {
            pickId: "c6",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a22",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a9",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a21",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a13",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a37",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a29",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
      {
        week: 2,
        picks: [
          {
            pickId: "c6",
            pickType: RosterPickTypes.Clan,
            position: RosterPositions.Clan,
          },
          {
            pickId: "a8",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A,
          },
          {
            pickId: "a17",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1,
          },
          {
            pickId: "a51",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B2,
          },
          {
            pickId: "a27",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C1,
          },
          {
            pickId: "a3",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C2,
          },
          {
            pickId: "a13",
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.C3,
          },
        ],
      },
    ],
  },
];
