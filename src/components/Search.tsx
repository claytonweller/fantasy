import { IEnumFilter } from "hooks/useEnumFilterState";
import { EnumFilterSelector } from "./EnumFilterSelector";

export default function Search(props: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  enumFilters: IEnumFilter<string>[];
}) {
  const { searchText, enumFilters, setSearchText } = props;

  let filters;
  if (enumFilters) {
    filters = enumFilters.map((f, i) => {
      return (
        <EnumFilterSelector key={`${f.name || "filter"}${i}`} enumFilter={f} />
      );
    });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        padding: 10,
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "black",
          zIndex: 1000,
          // margin: '5px',
          padding: "5px",
        }}
      >
        <label htmlFor="searchText">Search: </label>
        <input
          id="searchText"
          name="searchText"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {filters}
    </div>
  );
}
