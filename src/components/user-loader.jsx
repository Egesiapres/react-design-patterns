import axios from "axios";
import React, { useEffect, useState } from "react";

// PRO: unaware of the userId
// (able to fetch different users according to their ids)
export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);

      setUser(response.data);
    })();
  }, [userId]);

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
