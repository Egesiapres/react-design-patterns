import axios from "axios";
import React, { useEffect, useState } from "react";

// PATTERN 1: Container Component Pattern
export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");

      setUser(response.data);
    })();
  }, []);

  // Props are passed just in some scenarios

  // React.Children: access to the children elements to perform something
  // React.isValidElement: just if the child is valid
  // React.cloneElement: actually attaches some extra props to the element
  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};
