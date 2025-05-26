import axios from "axios";
import { useEffect, useState } from "react";

// HOC es 1: fetch data & add extra props
export const includeUser = (Component, userId) => {
  return props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, []);

    return (
      <Component
        {...props}
        user={user}
      />
    );
  };
};
