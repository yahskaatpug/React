import { useState } from "react";
import ChildCounter from "./childCounterProps";

const ParentCounter = () => {
  const [counter, setCounter] = useState(10);

  const onIncrement = (flag) => {
    if(flag) {
        setCounter((val) => val + 10);
    } 
    else setCounter((val) => val + 1);
  };
  const onDecrement = () => {
    if (counter === 1) {
      return;
    }
    setCounter((val) => val - 1);
  };

  return (
    <div>
      <ChildCounter
        myCounter={counter}
        ankitIncrement={()=>onIncrement(true)}
        ankitDecrement={onDecrement}
      />
      <hr />
      <button onClick={()=>onIncrement(false)}>Increment</button>
      <button onClick={onDecrement} disabled={counter === 1}>
        Decrement
      </button>
    </div>
  );
};

export default ParentCounter;