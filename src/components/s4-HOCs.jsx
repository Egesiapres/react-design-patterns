// import { includeUser } from "./include-user";
import { BookInfoForm } from "./book-form";
// import { UserInfoForm } from "./user-form";
// import { logProps } from "./log-props";
// import { UserInfo } from "./user-info";

// wrapper is needed to use a HOC
// const UserInfoWrapper = logProps(UserInfo);
// const UserInfoWithLoader = includUser(UserInfo, "3");

function S4HOCs() {
  return (
    <>
      {/* <UserInfoWrapper test={"test"} b="I'm be" c={21}>
        <UserInfo />
      </UserInfoWrapper> */}

      {/* <UserInfoWithLoader /> */}

      {/* <UserInfoForm /> */}

      <BookInfoForm />
    </>
  );
}

export default S4HOCs;