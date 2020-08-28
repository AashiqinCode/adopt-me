import React, { useState } from "react";

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(true);

  return (
    //eslint-disable-next-line
    <h1
      onClick={() => {
        setIsGreen(!isGreen);
      }}
      style={{ color: isGreen ? "limegreen" : "crimson" }}
    >
      UseState Example
    </h1>
  );
};

export default StateComponent;
