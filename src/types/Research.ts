export interface IResearch {
  note: string;
  isPublic?: boolean;
  tags: IResearchTag[];
}

export interface IDbResearch {
  note: string;
  weekHappened: number;
  weekPublic?: number;
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
