import axios from "axios";
import { DataSource } from "./data-source";
import { DataSourceWithRender } from "./data-source-with-render";
import { UserInfo } from "./user-info";

const getDataFromServer = async url => {
  const response = await axios.get(url);
  return response.data;
};

// !!! This f returns another f, that needs to be invoked to access the object corresponding to the key
// this because getData prop consumes a f
const getDataFromLocalStorage = key => () => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function S2ContainerComponents() {
  return (
    <>
      <DataSourceWithRender
        getData={() => getDataFromServer("/users/1")}
        render={resource => <UserInfo user={resource} />}
      ></DataSourceWithRender>

      <DataSource
        getData={() => getDataFromLocalStorage("test")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>
    </>
  );
}

export default S2ContainerComponents;
