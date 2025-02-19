export interface IResearch {
  note: string,
  tags: {
    entityType: EntityTypes,
    entityId: string
  }[]
}

export enum EntityTypes {
  Clan = 'Clan',
  Adventurer = 'Adventurer',
  Villager = 'Villager',
  Quest = 'Quest',
}