import { Component } from "react";

class ClassCompSample extends Component {
  state = {
    counter: 0,
    uName: "NA",
  };

  componentDidMount() {
    console.log("Mounting Done");

    const userName = localStorage.getItem("uName");
    if (userName) {
      this.setState({
        uName: userName,
      });
    }
  }

  counter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    const { counter, uName } = this.state;
    console.log("Re-Rendering: ", counter, uName);
    return (
      <div>
        <button onClick={this.counter}>Increment</button>
        <h1>Welcome to class component: {counter}</h1>
        <p>UserName: {uName}</p>
      </div>
    );
  }
}

export default ClassCompSample;
