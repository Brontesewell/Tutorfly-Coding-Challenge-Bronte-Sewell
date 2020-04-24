import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevNum: "",
      input: "",
      currentNum: "",
    };
  }

  addToInput = value => {
    this.setState({ 
      input: this.state.input + value 
    });
  };


  render() {
    return (
      <div className="App">
        <div >
         <h1>Hello World</h1>
         <h1>{this.state.input}</h1>
        </div>
      </div>
    );
  }
}

export default App;