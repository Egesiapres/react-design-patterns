import axios from "axios";
import { UserInfo } from "./components/user-info";
import { DataSourceWithRender } from "./components/data-source-with-render";
import { DataSource } from "./components/data-source";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

// !!! This f returns another f, that needs to be invoked to access the object corrisponding to the key
// this because getData prop consumes a f
const getDataFromLocalStorage = key => () => {
  return localStorage.getItem(key);
}

const Message = ({ msg }) => <h1>{msg}</h1> 

function App() {
  return (
    <>
      <DataSourceWithRender getData={() => getDataFromServer("/users/1")} render={(resource) => <UserInfo user={resource} />}>
      </DataSourceWithRender>

      <DataSource getData={() => getDataFromLocalStorage("test")} resourceName={"msg"}>
        <Message />
      </DataSource>
    </>
  );
}

export default App;
