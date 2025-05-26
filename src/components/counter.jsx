import { emitter } from "./s7-more-patterns";

const { useState, useEffect } = require("react");

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onIncrement = () => {
      setCount(count => count + 1);
    };

    const onDecrement = () => {
      setCount(count => count - 1);
    };

    // OBSERVER PATTERN: one component emits, while the other is subscribing/listening/observing
    // NOT the first solution you want to have

    // assign a f to the new event name
    emitter.on("inc.", onIncrement);
    emitter.on("dec.", onDecrement);

    // cleanup function
    return () => {
      emitter.off("inc.", onIncrement);
      emitter.off("dec.", onDecrement);
    };
  }, []);

  return <div>#: {count}</div>;
};

export default Counter;
