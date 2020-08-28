import React, { useState, useRef } from "react";

const RefComponent = () => {
  const [state, setState] = useState(0);
  const numRef = useRef(0);
  //   numRef.current=5;

  function incrementAndDeleayLogging() {
    setState(state + 1);
    numRef.current++;
    setTimeout(() => {
      alert(`state :${state} | Ref :${numRef.current}`);
    }, 1000);
  }

  return (
    <div>
      <h1>UseRef Example</h1>
      <h4>State :{state}</h4>
      <h4>NumRef(useRef) :{numRef.current}</h4>{" "}
      {/*Returns the current value till the compounent unmounts */}
      <button onClick={incrementAndDeleayLogging}>delay logging</button>
    </div>
  );
};

export default RefComponent;
