import { useState } from "react";
import { createPortal } from "react-dom";
import "../App.css";
// import { Child } from "./child";
// import Counter1 from "./counter1";
// import { ErrorBoundary } from "./error-boundary";

// REACT PORTAL: keep the place of the alert in the code but render it in another place in the DOM
// the console log will be triggered also clicking on the alert
// EVEN if the alert is rendered in another place in the DOM, not inside this div

// KEY: allows React to destroy & remount a specific component
// (by knowing that it is dealing with a different instance)

// EVENT PHASES
// 1. Capturing: top to bottom
// 2. Bubbling: bottom to top
function S8AdvancedConceptHooks() {
  const [show, setShow] = useState(false);

  // const [changeShirts, setChangeShirts] = useState(false);

  return (
    <>
      <div
        onClickCapture={() => console.log("outer div")}
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
      </div>

      {/* <h1>Parent Component</h1>
      <ErrorBoundary fallback={<h1>Error at Child Level</h1>}>
        <Child />
      </ErrorBoundary> */}

      {/* <div>
        {changeShirts ? (
          <span>Shirts counts: </span>
        ) : (
          <span>Shoes counts: </span>
        )}
        <br />
        <input
          type="number"
          key={changeShirts ? "shirts" : "shoes"}
        />
        <br />
        <button onClick={() => setChangeShirts(s => !s)}>Switch</button>
      </div> */}
    </>
  );
}

// NEVER attach elements using portals inside the body
// possible perf issues & conflict with other libraries
const Alert = ({ children, onClose, show }) => {
  if (!show) return;
  return createPortal(
    <div
      className="alert"
      onClickCapture={() => {
        onClose();
        console.log("inner div");
      }}
    >
      {children}
    </div>,
    document.querySelector("#alert-holder")
  );
};

export default S8AdvancedConceptHooks;
