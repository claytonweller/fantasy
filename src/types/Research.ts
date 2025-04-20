export interface IResearch {
  note: string;
  weekHappened: number;
  weekPublic?: number;
  tags: IResearchTag[];
}

export interface IResearchTag {
  entityType: EntityTypes;
  entityId: string;
}

export enum EntityTypes {
  Clan = "Clan",
  Adventurer = "Adventurer",
  Villager = "Villager",
  Quest = "Quest",
}
