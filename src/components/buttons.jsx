import { emitter } from "./s7-more-patterns";

const Buttons = () => {
  // assign a custom new event name that will be paired with a handler
  const onIncrementCounter = () => {
    emitter.emit("inc.");
  };

  const onDecrementCounter = () => {
    emitter.emit("dec.");
  };

  return (
    <div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
    </div>
  );
};

export default Buttons;
