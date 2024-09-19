const ChildCounter = (props) => {
    console.log("Props: ", props);
    return (
      <>
        <h1>Inside Child Counter: {props.myCounter}</h1>
        <button onClick={()=>props.ankitIncrement(true)}>Increment from child</button>
        <button onClick={props.ankitDecrement}>Decrement from child</button>
      </>
    );
  };
  
  export default ChildCounter;