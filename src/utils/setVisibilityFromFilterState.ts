import { IEnumFilter } from "hooks/useEnumFilterState";

export function setVisibilityFromFilterState(
  filterName: string,
  keyMatch: string | string[],
  filters?: IEnumFilter<string>[],
) {
  const filter = filters?.find((f) => f.name === filterName);
  if (!filter) return;
  if (typeof keyMatch === "string") {
    return filter.state[keyMatch] || false;
  }
  // If the match list is empty we always show.
  if (!keyMatch.length && filter.state.None) return true;
  const matches = keyMatch.filter((key) => {
    return filter.state[key] || false;
  });
  return !!matches.length;
}
