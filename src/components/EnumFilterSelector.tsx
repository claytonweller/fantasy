import { IEnumFilter } from "hooks/useEnumFilterState";
import { createCheckboxesFromEnumFilter } from "utils/createCheckboxesFromEnumFilter";

export function EnumFilterSelector(props: { enumFilter: IEnumFilter<string> }) {
  const {
    enumFilter: { name, state, setState },
  } = props;
  const nameLabel = name ? (
    <div>
      <b>{name}</b>
    </div>
  ) : (
    ""
  );
  return (
    <div>
      {nameLabel}
      {createCheckboxesFromEnumFilter(state, setState)}
    </div>
  );
}
