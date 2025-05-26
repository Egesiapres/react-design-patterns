import axios from "axios";
import { useEffect, useState } from "react";

// HOC es 2: fetching data & separing states and handlers
export const includeUpdatableUser = (Component, userId) => {
  return props => {
    // user befor edits
    const [initialUser, setInitialUser] = useState(null);

    // user we're editing using the form
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = updates => {
      setUser({ ...user, ...updates });
    };

    const onPostUser = async () => {
      const response = await axios.post(`/users/${userId}`, { user });
      setInitialUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
};
