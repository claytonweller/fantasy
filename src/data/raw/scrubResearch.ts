import { IResearch } from "types/Research";
import { rawResearch } from "./research";
import { writeFileSync } from "fs";

const scrubbedResearch:IResearch[] = rawResearch.filter((r:IResearch) =>{
  return r.isPublic
})

console.warn(scrubbedResearch)

const outPut = `
import { IResearch } from "types/Research";

export const rawResearch = ${JSON.stringify(scrubbedResearch)} as IResearch[]
`

console.warn(outPut)

writeFileSync('src/data/raw/research.ts', outPut)

console.log('Done!')