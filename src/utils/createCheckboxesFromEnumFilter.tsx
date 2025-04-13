import React from "react";

export function createCheckboxesFromEnumFilter<
  T extends { [key: string]: boolean },
>(filter: T, set: React.Dispatch<React.SetStateAction<T>>) {
  const options = Object.entries(filter).map(([key, checked], i) => {
    const id = `cardType${key}`;
    return (
      <div key={`${key}${i}`}>
        <label htmlFor={id}>{key}</label>
        <input
          id={id}
          name={id}
          type="checkbox"
          readOnly={true}
          checked={checked}
          onClick={(e) => {
            e.stopPropagation();
            const updated = { ...filter, [key]: !filter[key] };
            set(updated);
          }}
        />
      </div>
    );
  });
  return options;
}
