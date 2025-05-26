import axios from "axios";
import React, { useEffect, useState } from "react";

// PRO: unaware of the url & name of the resource to fetch
// (able to fetch different resources according to their names & urls)
// avoids the continuous use of useEffect & useState while fetching datas
export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);

      setResource(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }

        return child;
      })}
    </>
  );
};
