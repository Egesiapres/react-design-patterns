// import { useCurrentUser } from "./current-user-hook";
import axios from "axios";
import { useCallback } from "react";
import { useDataSource } from "./data-source.hook";
// import { useResource } from "./resource.hook";
// import { useUser } from "./user.hook";

const fetchFromServer = resourceUrl => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

// const getDataFromLocalStorage = key => () => {
//   return localStorage.getItem(key);
// }

export const UserInfo = ({ userId }) => {
  console.log("Am I rendering");
  // loop of logs
  // 1. fetchFromServer is defined outside the component
  // 2. the component mounts and an instance of it is created inside the hook
  // 3. the hook runs
  // 4. the component is updated
  // repeat
  // FIX: useCallback

  // const user = useUser(userId);
  // const user = useResource("/users/2")

  const fetchUser = useCallback(fetchFromServer(`/users/${userId}`), [userId]);
  const user = useDataSource(fetchUser);
  // const message = useDataSource(getDataFromLocalStorage("msg"));

  const { name, age, country, books } = user || {};

  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
