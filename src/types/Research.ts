export interface IResearch {
  note: string;
  weekHappened: number;
  weekPublic?: number;
  tags: IResearchTag[];
  villagerPrompts?: IResearchPrompt[];
}

export interface IResearchPrompt {
  villagerId: string;
  week: number;
  text: string;
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
