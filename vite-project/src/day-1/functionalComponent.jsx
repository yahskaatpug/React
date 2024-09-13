import { useEffect, useState } from "react";

const FuncComponent = () => {
  const [counter, setCounter] = useState(0);
  const [uName, setUName] = useState("NA");

  for(let i=0;i<10;i++){
    console.log("i:",i);
  }

  useEffect(() => {
    console.log("Mouting done");
    const userName = localStorage.getItem("uName");
    if (userName) {
      setUName(userName);
    }
  }, []);

  console.log("Re-Render: ", counter, uName);
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <h1>Welcome to class component: {counter}</h1>
      <p>UserName: {uName}</p>
    </div>
  );
};

export default FuncComponent;
