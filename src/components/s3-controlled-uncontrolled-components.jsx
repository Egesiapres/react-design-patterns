// import { useState } from "react";
// import { ControlledForm } from "./controlled-form";
// import { ControlledModal } from "./controlled-modal";
import { UncontrolledFlow } from "./uncontrolled-flow";
// import { UncontrolledModal } from "./uncontrolled-modal";
// import { UncontrolledForm } from "./uncontrolled-form";

const StepOne = ({ goNext }) => <>
  <h1>Step #1</h1>
  <button onClick={goNext}>Next</button>
</>

const StepTwo = ({ goNext }) => <>
  <h1>Step #2</h1>
  <button onClick={goNext}>Next</button>
</>

const StepThree = ({ goNext }) => <>
  <h1>Step #3</h1>
  <button onClick={goNext}>Next</button>
</>

function S3ControlledUncontrolledComponents() {
  // const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <>
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}

      {/* <ControlledModal shouldDisplay={shouldDisplay} onClose={() => setShouldDisplay(false)}>
        <h3>I am the body of the modal!!!</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>{shouldDisplay ? "Hide Modal" : "Display Modal"}</button> */}

      <UncontrolledFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default S3ControlledUncontrolledComponents;