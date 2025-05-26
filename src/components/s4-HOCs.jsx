import { includUser } from "./include-user";
// import { logProps } from "./log-props";
import { UserInfo } from "./user-info";

// wrapper is needed to use a HOC
// const UserInfoWrapper = logProps(UserInfo);

const UserInfoWithLoader = includUser(UserInfo, "3");

function S4HOCs() {
  return (
    <>
      {/* <UserInfoWrapper test={"test"} b="I'm be" c={21}>
        <UserInfo />
      </UserInfoWrapper> */}

      {/* <UserInfoWithLoader /> */}
    </>
  );
}

export default S4HOCs;