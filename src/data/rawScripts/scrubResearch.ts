import { rawResearch } from "../raw/research";
import { writeFileSync } from "fs";
import { CURRENT_WEEK } from "config";
import { IResearch } from "types/Research";

const scrubbedResearch: IResearch[] = rawResearch.filter((r: IResearch) => {
  const isPublicNow = r.weekPublic && r.weekPublic <= CURRENT_WEEK;
  const hasHappened = r.weekHappened < CURRENT_WEEK;
  return isPublicNow && hasHappened;
});

console.log("Scrubbing research secrets");

const output = `
import { EntityTypes, IResearch } from "types/Research";

export const rawResearch: IResearch[] = ${JSON.stringify(scrubbedResearch)} as IResearch[]
`;

writeFileSync("src/data/raw/research.ts", output);

console.log("Squeaky clean!");
