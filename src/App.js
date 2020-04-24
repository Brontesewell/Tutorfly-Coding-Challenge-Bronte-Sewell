import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import ButtonToClear from "./components/ButtonToClear";

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
    this.state.prevNum = this.state.input
    this.state.operator = "-";
    this.setState({ 
      input: "" 
    });
  };


  add = () => {
    this.state.prevNum = this.state.input
    this.state.operator = "+";
    this.setState({ 
      input: "" 
    });
  };
  
  divide = () => {
    this.state.prevNum = this.state.input
    this.state.operator = "/";
    this.setState({ 
      input: "" 
    });
  };
  
  multiply = () => {
    this.state.prevNum = this.state.input
    this.state.operator = "*";
    this.setState({ 
      input: ""
     });
  };

  equals = () => { 
    this.state.currentNum = this.state.input;
    if (this.state.operator == "+") {
      console.log("+")
    } else if (this.state.operator == "-") {
      console.log("-")
    } else if (this.state.operator == "*") {
      console.log("*")
    } else if (this.state.operator == "/") {
      console.log("/")
    }
  }
  

  render() {
    console.log(this.state.input)
    return (
      <div className="App">
        <div >
         <h1>Hello World</h1>
         <Input input={this.state.input}/>
         <button handleNumClick={this.addToInput}>0</button>
         <button handleNumClick={this.addToInput}>1</button>
         <button handleNumClick={this.addToInput}>2</button>
         <button handleNumClick={this.addToInput}>3</button>
         <button handleNumClick={this.addToInput}>4</button>         <button handleClick={this.addToInput}>7</button>
         <button handleNumClick={this.addToInput}>5</button>
         <button handleNumClick={this.addToInput}>6</button>
         <button handleNumClick={this.addToInput}>7</button>
         <button handleNumClick={this.addToInput}>8</button>
         <button handleNumClick={this.addToInput}>9</button>
         <button handleNumClick={this.divide}>/</button>
         <button handleNumClick={this.multiply}>*</button>
         <button handleNumClick={this.add}>+</button>
         <button handleNumClick={this.subtract}>-</button>
         <button handleNumClick={this.equals}>=</button>

         <ButtonToClear clearInput={this.clearInput}>Clear</ButtonToClear>

        </div>
      </div>
    );
  }
}

export default App;