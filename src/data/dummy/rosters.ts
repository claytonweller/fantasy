import { IDbRoster, IDbRosterPick, RosterPickTypes, RosterPositions } from "../../types/Roster";

export const dummyRosters:IDbRoster[] = [
  {
    id: '1',
    villagerId: '1',
    week: 1,
  },
  {
    id: '3',
    villagerId: '1',
    week: 2,

  },
  {
    id: '2',
    villagerId: '2',
    week: 1,
  }
]

export const dummyRosterPicks: IDbRosterPick[] = [
  {
    id: '3',
    rosterId: '2',
    pickId: '2',
    pickType: RosterPickTypes.Adventurer,
    position: RosterPositions.A
  },
  {
    id: '2',
    rosterId: '3',
    pickId: '2',
    pickType: RosterPickTypes.Adventurer,
    position: RosterPositions.A
  },
  {
    id: '1',
    rosterId: '1',
    pickId: '2',
    pickType: RosterPickTypes.Adventurer,
    position: RosterPositions.A
  }
]

export const rostersByVillagerId = dummyRosters.reduce((prev, r)=>{
  if(!r.villagerId) return prev
  const existing = prev[r.villagerId]
  if(!existing) return {...prev, [r.villagerId]: [r]}
  return {...prev, [r.villagerId]:[...existing, r]}
}, {} as {[villagerId: string]:IDbRoster[]} )

export const rostersPicksByRosterId = dummyRosterPicks.reduce((prev, rp)=>{
  if(!rp.rosterId) return prev
  const existing = prev[rp.rosterId]
  if(!existing) return {...prev, [rp.rosterId]: [rp]}
  return {...prev, [rp.rosterId]:[...existing, rp]}
}, {} as {[rosterId: string]:IDbRosterPick[]} )