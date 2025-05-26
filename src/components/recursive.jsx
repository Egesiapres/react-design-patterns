const isObject = data => typeof data === "object" && data !== null;

// RECURSIVE COMPONENT: a component that calls himself inside his body
// (kind of component loop)
export const RecursiveComponent = ({ data }) => {
  // STOPPING CONDITION
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li>
            {key}:
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};
