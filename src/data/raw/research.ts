import { EntityTypes, IResearch } from "types/Research";

export const rawResearch: IResearch[] = [
  {  
    note: `Vlort is very lazy. He very rarely takes quests. He runs the Mill because its entertaining.`,
    isPublic: false,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a20'
      }
    ]
  },
  {  
    note: `Corporal Margrave, fled from battle, his entire company was decimated, and he was discharged from the kings guard.`,
    isPublic: false,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a24'
      }
    ]
  },
  {  
    note: `Reginald Spintsmunge IV bought his way into the Radiantia Clan. He has never actually had a duel, and it is up for debate whether the Spintsmunges are really of nobel blood.`,
    isPublic: false,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a25'
      },
      {
        entityType: EntityTypes.Clan,
        entityId: 'c6'
      }
    ]
  },
  {  
    note: `Guy Norman is actually a high rank adventurer running away from a neighboring country. His real name is Hiro Flamburge.`,
    isPublic: false,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a31'
      }
    ]
  },
  {  
    note: `It's unfortunate that Juniper Montrose gets queasy at the sight of blood.`,
    isPublic: false,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a34'
      }
    ]
  },
  {  
    note: `No one wants to be in a party with them because they're creeped out.`,
    isPublic: false,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a36'
      }
    ]
  },
  {  
    note: `Kimberflorn isn't Clara's real last name. She's actually the daughter of Mara Wright, the Master of The Exploding fist. She was training under her mother until she fell in love with Sir Robin. She is hiding her true strength to not hurt his feelings.`,
    isPublic: false,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a39'
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a40'
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a41'
      }
    ]
  },
  {  
    note: `Mara Wright is Clara Kimberflorn's Mother. She does not approve of her daughter's love for Sir Robin. She is trying to figure out ways to sabotage their relationship.`,
    isPublic: false,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a39'
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a40'
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a41'
      }
    ]
  },
  {  
    note: `Sir Robin has no idea that Clara Kimberflorn is in love with him. Or that she's always saving his life.`,
    isPublic: false,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a39'
      },
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a41'
      }
    ]
  },
  {  
    note: `He's a terrible philanderer, and will only do quests if women are in the party. Said women often do not suffer a second outing.`,
    isPublic: false,
    tags: [
      {
        entityType: EntityTypes.Adventurer,
        entityId: 'a43'
      }
    ]
  },
]