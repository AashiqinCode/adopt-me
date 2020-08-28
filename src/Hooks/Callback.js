import React, { useState, useEffect, useCallback, memo } from "react";

// eslint-disable-next-line react/display-name
const ExpensiveComponent = memo(({ compute, count }) => {
  return (
    <div>
      <h2>computed: {compute(count)}</h2>
      <h4>last re-render {new Date().toLocaleDateString}</h4>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()));
    return () => clearTimeout(timer);
  });

  const fibonaci = (n) => {
    if (n <= 1) {
      return 1;
    }
    return fibonaci(n - 1) + fibonaci(n - 2);
  };

  return (
    <div>
      <h3>UseCallBack Example {time.toLocaleDateString}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Current Count: {count}
      </button>

      <ExpensiveComponent compute={useCallback(fibonaci, [])} count={count} />
    </div>
  );
};

export default CallbackComponent;
