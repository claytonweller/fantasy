export function Notes(params: { noteString?: string }) {
  const { noteString } = params;
  if (!noteString) return <></>;
  const hasLineBreak = noteString.includes("\n");
  if (!hasLineBreak) return <>{noteString}</>;

  const notesWithBreaks = noteString.split("\n").map((n, i) => {
    if (i === 0) return n;
    return (
      <div key={n[0] + i} style={{ marginTop: 5 }}>
        {n}
      </div>
    );
  });
  return <>{notesWithBreaks}</>;
}
