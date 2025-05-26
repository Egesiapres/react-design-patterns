import { useState } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);


  return (
    <>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}

export default Counter1;