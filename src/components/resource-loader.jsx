import axios from "axios";
import React, { useEffect, useState } from "react"

// The most flexible Container Component created
// avoids the continuous use of useEffect & useState while fetching datas
export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);

      setResource(response.data)
    })()
  }, [resourceUrl]);

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