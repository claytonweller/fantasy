import { IRawResearch, rawResearch } from "../raw/research";
import { writeFileSync } from "fs";
import { CURRENT_WEEK } from "config";

const scrubbedResearch: IRawResearch[] = rawResearch.filter(
  (r: IRawResearch) => {
    const hasNeverBeenPublic = !Number.isInteger(r.weekPublic);
    const hasNotHappenedYet = r.weekHappened >= CURRENT_WEEK;
    const isNotPublicYet = r.weekPublic && r.weekPublic > CURRENT_WEEK;
    console.warn(
      r.weekHappened,
      r.weekPublic,
      isNotPublicYet,
      hasNotHappenedYet,
    );
    return !(hasNeverBeenPublic || isNotPublicYet || hasNotHappenedYet);
  },
);

console.log("Scrubbing research secrets");

const output = `
import { EntityTypes, IDbResearch, IResearchTag } from "types/Research";

export interface IRawResearch extends IDbResearch {
  tags: IResearchTag[]
}

export const rawResearch: IRawResearch[] = ${JSON.stringify(scrubbedResearch)} as IRawResearch[]
`;

writeFileSync("src/data/raw/research.ts", output);

console.log("Squeaky clean!");
