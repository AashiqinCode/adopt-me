/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useMemo } from "react";

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);

  //   useMemo stores the values of the function and makes it easier for state mgt of other components
  const fib = useMemo(() => fibonacci(num), [num]);
  //   const fib = fibonacci(num);

  return (
    <div>
      <h2
        onClick={() => setIsGreen(!isGreen)}
        style={{
          color: isGreen ? "limegreen" : "crimson",
        }}
      >
        useMemo Example{" "}
      </h2>{" "}
      <h2>
        Fibonacci of {num}
        is {fib}{" "}
      </h2>{" "}
      <button onClick={() => setNum(num + 1)}> + </button>{" "}
    </div>
  );
};

export default MemoComponent;
