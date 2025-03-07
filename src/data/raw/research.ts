import { EntityTypes, IResearch } from "types/Research";

export const rawResearch: IResearch[] = [
  {
    note: 'Elwin is not having a good time in Falcon Hunt',
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: '2'
      },
      {
        entityType: EntityTypes.Clan,
        entityId: 'clan1'
      },
      {
        entityType: EntityTypes.Villager,
        entityId: '1'
      },
      {
        entityType: EntityTypes.Quest,
        entityId: 'quest1'
      }
    ]
  },
  {
    note: 'Gad is a wanted man in the capitol',
    isPublic: true,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'adv1'
      },
      {
        entityType: EntityTypes.Villager,
        entityId: '1'
      },
    ]
  }
]