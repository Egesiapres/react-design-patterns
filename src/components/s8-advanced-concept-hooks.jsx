// import { useState } from "react";
// import { createPortal } from "react-dom";
import "../App.css";
import { Child } from "./child";
import { ErrorBoundary } from "./error-boundary";

// REACT PORTAL: keep the place of the alert in the code but render it in another place in the DOM
// the console log will be triggered also clicking on the alert
// EVEN if the alert is rendered in another place in the DOM, not inside this div
function S8AdvancedConceptHooks() {
  // const [show, setShow] = useState(false);

  return (
    <>
      {/* <div
        onClick={() => console.log("outer div")}
        style={{ position: "absolute", marginTop: "200px" }}
      >
        <h1>Other Content</h1>
        <button onClick={() => setShow(true)}>Show Message</button>

        <Alert
          show={show}
          onClose={() => setShow(false)}
        >
          A sample message to show.
          <br />
          Click it to close.
        </Alert>
      </div> */}

      <h1>Parent Component</h1>
      <ErrorBoundary fallback={<h1>Error at Child Level</h1>}>
        <Child />
      </ErrorBoundary>
    </>
  );
}

// NEVER attach elements using portals inside the body
// possible perf issues & conflict with other libraries
// const Alert = ({ children, onClose, show }) => {
//   if (!show) return;

//   return createPortal(
//     <div
//       className="alert"
//       onClick={onClose}
//     >
//       {children}
//     </div>,
//     document.querySelector("#alert-holder")
//   );
// };

export default S8AdvancedConceptHooks;
