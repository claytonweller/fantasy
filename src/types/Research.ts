export interface IResearch {
  note: string;
  isPublic?: boolean;
  tags: {
    entityType: EntityTypes;
    entityId: string;
  }[];
}

export enum EntityTypes {
  Clan = "Clan",
  Adventurer = "Adventurer",
  Villager = "Villager",
  Quest = "Quest",
}
