import { IResearch } from "types/Research";
import { rawResearch } from "./research";
import { writeFileSync } from "fs";

const scrubbedResearch:IResearch[] = rawResearch.filter((r:IResearch) =>{
  return r.isPublic
})
console.log('Scrubbing research secrets')

const output = `
import { IResearch } from "types/Research";

export const rawResearch = ${JSON.stringify(scrubbedResearch)} as IResearch[]
`

writeFileSync('src/data/raw/research.ts', output)

console.log('Squeaky clean!')