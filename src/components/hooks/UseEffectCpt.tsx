import { useState, useEffect } from "react";

function UseEffectCpt() {
  const [time, setTime] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <div>{time}</div>;
}

export default UseEffectCpt;
