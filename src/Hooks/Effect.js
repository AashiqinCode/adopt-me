import React, { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);

    // Clearing function
    return () => clearTimeout(timer);
  }, [time]); //Time is changing every second thus the useEffect is rendering

  return <h1>useEffect Example :{time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
