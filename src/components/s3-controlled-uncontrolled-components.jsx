import { useState } from "react";
// import { ControlledForm } from "./controlled-form";
import { ControlledModal } from "./controlled-modal";
// import { UncontrolledModal } from "./uncontrolled-modal";
// import { UncontrolledForm } from "./uncontrolled-form";

function S3ControlledUncontrolledComponents() {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <>
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      <ControlledModal shouldDisplay={shouldDisplay} onClose={() => setShouldDisplay(false)}>
        <h3>I am the body of the modal!!!</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>{shouldDisplay ? "Hide Modal" : "Display Modal"}</button>
    </>
  );
}

export default S3ControlledUncontrolledComponents;