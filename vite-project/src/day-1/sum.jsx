const SampleGreeting = () => {
    // Logic
    const uName = "Uvesh Amin Chamadiya";
  
    const addNums = (a, b) => {
      return a + b;
    };
  
    return (
      <div>
        <h1>
          Welcome {uName} to Sample Greetings{" "}
          <span>
            {10 + 10 + 10 + 9} - Sum of 10+9={addNums(10, 9)}
          </span>
        </h1>
        <div className="form">
          <p>Email</p>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <button>Submit</button>
      </div>
    );
  };
  
  export default SampleGreeting;
  