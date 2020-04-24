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
  

  render() {
    console.log(this.state.input)
    return (
      <div className="App">
        <div >
         <h1>Hello World</h1>
         <Input input={this.state.input}/>
         <button handleClick={this.addToInput}>0</button>
         <button handleClick={this.addToInput}>1</button>
         <button handleClick={this.addToInput}>2</button>
         <button handleClick={this.addToInput}>3</button>
         <button handleClick={this.addToInput}>4</button>         <button handleClick={this.addToInput}>7</button>
         <button handleClick={this.addToInput}>5</button>
         <button handleClick={this.addToInput}>6</button>
         <button handleClick={this.addToInput}>7</button>
         <button handleClick={this.addToInput}>8</button>
         <button handleClick={this.addToInput}>9</button>
         <button handleClick={this.divide}>/</button>
         <button handleClick={this.multiply}>*</button>
         <button handleClick={this.add}>+</button>
         <button handleClick={this.subtract}>-</button>

         <ButtonToClear clearInput={this.clearInput}>Clear</ButtonToClear>

        </div>
      </div>
    );
  }
}

export default App;