import React, { useEffect, useState } from "react"

// Most generic Container Component Pattern
// PRO: unaware of the fetching f (method/url)
// (able to fetch different resources according to their names & urls)
export const DataSource = ({ getData = () => { }, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();

      setResource(data)
    })()
  }, [getData]);

  // Do not use Children & cloneElement everywhere, especially in simple scenarios
  // Here normal because we are caring about maintainability, readability & clan

  // It's possible to avoid this thig using thr Render Props Pattern, or Render Function
  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource })
        }

        return child;
      })}
    </>
  )
}