// import { RecursiveComponent } from "./recursive";
// import { GreenSmallButton, RedButton } from "./composition";
import { RedButton, SmallRedButton } from "./partial";

// const myNestedObject = {
//   key1: "value1",
//   key2: {
//     innerKey1: "innerValue1",
//     innerKey2: "innerValue2",
//   },
//   key3: "value3",
// };

function S6FunctionalProgrammingInReact() {
  return (
    <>
      {/* <RecursiveComponent data={myNestedObject} /> */}

      {/* <RedButton text="I am red!" />
      <GreenSmallButton text="I am small and green!" /> */}

      <RedButton text="I am red!" />
      <SmallRedButton text="I am small and red!" />
    </>
  );
}

export default S6FunctionalProgrammingInReact;
