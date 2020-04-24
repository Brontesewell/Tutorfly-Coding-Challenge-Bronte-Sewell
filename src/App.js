import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevNum: "",
      input: "123",
      currentNum: "",
      operator: "",
    };
  }

  addToInput = value => {
    this.setState({ 
      input: this.state.input + value 
    });
  };
  

  clearInput = () => {
    this.setState({ input: "" });
  };

  subtract = () => {
    this.state.prevNum = ????;
    this.state.operator = "-";
    this.setState({ 
      input: "" 
    });
  };


  add = () => {
    this.state.prevNum = ????;
    this.state.operator = "+";
    this.setState({ 
      input: "" 
    });
  };
  
  divide = () => {
    this.state.prevNum = ????;
    this.state.operator = "/";
    this.setState({ 
      input: "" 
    });
  };
  
  multiply = () => {
    this.state.prevNum = ????;
    this.state.operator = "*";
    this.setState({ 
      input: ""
     });
  };
  

  render() {
    console.log(this.state.input)
    return (
      <div className="App">
        <div >
         <h1>Hello World</h1>
         <Input input={this.state.input}/>
        </div>
      </div>
    );
  }
}

export default App;