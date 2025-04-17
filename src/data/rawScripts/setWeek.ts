import { writeFileSync } from "fs";

export function setWeek(week = 1000) {
  const output = `
  // MAKE SURE TO UPDATE setWeek.ts if you change this file!!!!

  export const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || "prod";
  export const CURRENT_WEEK = ${week};
  `;
  writeFileSync("src/config.ts", output);
  console.log("Week set to: ", week);
}
