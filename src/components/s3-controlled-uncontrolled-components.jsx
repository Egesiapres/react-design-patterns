import { useState } from "react";
// import { ControlledForm } from "./controlled-form";
// import { ControlledModal } from "./controlled-modal";
// import { UncontrolledFlow } from "./uncontrolled-flow";
import { ControlledFlow } from "./controlled-flow";
// import { UncontrolledModal } from "./uncontrolled-modal";
// import { UncontrolledForm } from "./uncontrolled-form";

const StepOne = ({ goNext }) => <>
  <h1>Step #1: Enter yuor name:</h1>
  <button onClick={() => goNext({ name: "MyName" })}>Next</button>
</>

const StepTwo = ({ goNext }) => <>
  <h1>Step #2: Enter your age:</h1>
  <button onClick={() => goNext({ age: 26 })}>Next</button>
</>

const StepThree = ({ goNext }) => <>
  <h1>Congraturations! You qualify for the gift!</h1>
  <button onClick={() => goNext({ country: "Mars" })}>Next</button>
</>

const StepFour = ({ goNext }) => <>
  <h1>Step #4: Enter your country:</h1>
  <button onClick={() => goNext({})}>Next</button>
</>

function S3ControlledUncontrolledComponents() {
  // const [shouldDisplay, setShouldDisplay] = useState(false);

  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  }

  return (
    <>
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}

      {/* <ControlledModal shouldDisplay={shouldDisplay} onClose={() => setShouldDisplay(false)}>
        <h3>I am the body of the modal!!!</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>{shouldDisplay ? "Hide Modal" : "Display Modal"}</button> */}

      {/* <UncontrolledFlow onDone={data => {
        console.log(data);
        alert("Yaee, you made it to the final step!");
      }}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow> */}

      {/* // Controlled Flow helps in handling condition in the parent component */}
      <ControlledFlow currentIndex={currentStepIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default S3ControlledUncontrolledComponents;