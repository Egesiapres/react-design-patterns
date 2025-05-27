import {
  useCallback,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
// import { createPortal } from "react-dom";
import "../App.css";
import { HeavyComponent } from "./heavy-component";
// import Form from "./input";
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
  // const [show, setShow] = useState(false);
  // const [top, setTop] = useState(0);
  // const buttonRef = useRef(null);

  // const [showInput, setShowInput] = useState(false);
  // const realInputRef = useRef();
  // const inputRef = useCallback(input => {
  //   realInputRef.current = input; // to assign the ref to the input element
  //   if (input === null) return;
  //   input.focus();
  // }, []);

  // const [changeShirts, setChangeShirts] = useState(false);

  // like the useEffect but handles in a better way scenarios in which
  // I'm rendering something according to the output of an operation that is happening inside the useEffect
  // useLayoutEffect(() => {
  //   if (buttonRef.current === null || !show) return setTop(0);
  //   const { bottom } = buttonRef.current.getBoundingClientRect();
  //   setTop(bottom + 30);
  // }, [show]);

  // const now = performance.now();
  // while (now > performance.now() - 100) {
  //   // Do something
  // }

  // tries to add a focus on the ref event if it's not initialized yet
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const [keyword, setKeyword] = useState("");

  // disconnects the input value from the heavy component render
  // the component is rendered with a lower priority
  // before: state & input onChange
  // when the high priority tasks are ended the component is re-rendered
  const deferredKeyword = useDeferredValue(keyword);

  console.log("Keyword:", keyword);
  console.log("Deferred Keyword:", deferredKeyword);

  return (
    <>
      {/* <div
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
      </div> */}

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

      {/* <button
        ref={buttonRef}
        onClick={() => setShow(s => !s)}
      >
        Show
      </button>
      {show && (
        <div
          className="tooltip"
          style={{
            top: `${top}px`,
          }}
        >
          Some text ...
        </div>
      )} */}

      {/* <Form />
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <Form /> */}

      {/* <button onClick={() => setShowInput(s => !s)}>Switch</button>
      {showInput && (
        <input
          type="text"
          ref={inputRef}
        />
      )}
      */}

      <input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <HeavyComponent keyword={deferredKeyword} />
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
//       onClickCapture={() => {
//         onClose();
//         console.log("inner div");
//       }}
//     >
//       {children}
//     </div>,
//     document.querySelector("#alert-holder")
//   );
// };

export default S8AdvancedConceptHooks;

// - review bubbling (Event Listeners)
// - useLayoutEffect
// useCallback as Ref not working
