import { RecursiveComponent } from "./recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: "innerValue2",
  },
  key3: "value3",
};

function S6FunctionalProgrammingInReact() {
  return (
    <>
      <RecursiveComponent data={myNestedObject} />
    </>
  );
}

export default S6FunctionalProgrammingInReact;
