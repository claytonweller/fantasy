import { IDbRoster, IDbRosterPick, RosterPickTypes, RosterPositions } from "types/Roster";
import { IDbVillager } from "types/Villager";

export const rawVillagers:IRawVillager[] = [
  {
    id: 'v1',
    name: 'Wilder',
    playerName: 'Wilder',
    rosters:[
      // {
      //   week: 1,
      //   picks: [
      //     {
      //       pickId: '2',
      //       pickType: RosterPickTypes.Adventurer,
      //       position: RosterPositions.B1
      //     },

      //   ]
      // },
    ]
  },
  {
    id: 'v2',
    name: 'Catie',
    playerName: 'Catie',
    rosters:[
    ]
  },
  {
    id: 'v3',
    name: 'Dan',
    playerName: 'Dan',
    rosters:[
    ]
  },
  {
    id: 'v4',
    name: 'Sophie',
    playerName: 'Sophie',
    rosters:[
    ]
  },
  {
    id: 'v5',
    name: 'Adam',
    playerName: 'Adam',
    rosters:[
    ]
  },
  {
    id: 'v6',
    name: 'Jake',
    playerName: 'Jake',
    rosters:[
    ]
  },
  {
    id: 'v7',
    name: 'Courtney',
    playerName: 'Courtney',
    rosters:[
    ]
  },
]

export interface IRawVillager extends IDbVillager{
  rosters: IRawRoster[]
}

export interface IRawRoster extends Omit<IDbRoster, 'id' | 'villagerId'>{
  picks: IRawRosterPick[]
}

export interface IRawRosterPick extends Omit<IDbRosterPick, 'id' | 'rosterId'>{}