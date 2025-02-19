import { rawResearch } from "data/raw/research";
import { EntityTypes, IResearch } from "types/Research";

export const researchByTag:{[key in EntityTypes]:ITaggedResearch} = {
  [EntityTypes.Adventurer]:{},
  [EntityTypes.Clan]:{},
  [EntityTypes.Villager]:{},
  [EntityTypes.Quest]:{},
}

rawResearch.forEach(r =>{
  r.tags.forEach(t =>{
    const exists = researchByTag[t.entityType][t.entityId]
    if(!exists) researchByTag[t.entityType][t.entityId] = []
    researchByTag[t.entityType][t.entityId].push(r)
  })
})


interface ITaggedResearch {
  [entityId: string]:IResearch[]
}