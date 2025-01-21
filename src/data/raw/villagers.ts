import { IDbRoster, IDbRosterPick, RosterPickTypes, RosterPositions } from "../../types/Roster";
import { IDbVillager } from "../../types/Villager";

export const rawVillagers:IRawVillager[] = [
  {
    id: '1',
    name: 'Clayton',
    rosters:[
      {
        week: 1,
        picks: [
          {
            pickId: '2',
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1
          },
        ]
      },
      {
        week: 2,
        picks: [
          {
            pickId: '2',
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.B1
          }
        ]
      },
    ]
  },
  {
    id: '2',
    name: 'Ryan',
    alias: 'Ryoman',
    rosters: [
      {
        week: 1,
        picks:[
          {
            pickId: '2',
            pickType: RosterPickTypes.Adventurer,
            position: RosterPositions.A
          },
        ]
      }
    ]
  }
]

export interface IRawVillager extends IDbVillager{
  rosters: IRawRoster[]
}

export interface IRawRoster extends Omit<IDbRoster, 'id' | 'villagerId'>{
  picks: IRawRosterPick[]
}

export interface IRawRosterPick extends Omit<IDbRosterPick, 'id' | 'rosterId'>{}