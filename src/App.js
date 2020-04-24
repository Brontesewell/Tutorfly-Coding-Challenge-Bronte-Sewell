import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import ButtonToClear from "./components/ButtonToClear";
import ButtonsForFunc from "./components/ButtonsForFunc";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevNum: "",
      input: "",
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
      this.setState({
        input: parseInt(this.state.prevNum) + parseInt(this.state.currentNum)
      });
    } else if (this.state.operator == "-") {
      this.setState({
        input: parseInt(this.state.prevNum) - parseInt(this.state.currentNum)
      });
    } else if (this.state.operator == "*") {
      this.setState({
        input: parseInt(this.state.prevNum) * parseInt(this.state.currentNum)
      });
    } else if (this.state.operator == "/") {
      this.setState({
        input: parseInt(this.state.prevNum) / parseInt(this.state.currentNum)
      });
    }
  }
  

  render() {
    console.log(this.state.input)
    return (
      <div className="App">
        <div >
         <h1>Hello World</h1>
         <Input input={this.state.input}/>
         <ButtonsForFunc handleNumClick={this.addToInput}>0</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.addToInput}>1</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.addToInput}>2</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.addToInput}>3</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.addToInput}>4</ButtonsForFunc> 
         <ButtonsForFunc handleNumClick={this.addToInput}>5</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.addToInput}>6</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.addToInput}>7</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.addToInput}>8</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.addToInput}>9</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.divide}>/</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.multiply}>*</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.add}>+</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.subtract}>-</ButtonsForFunc>
         <ButtonsForFunc handleNumClick={this.equals}>=</ButtonsForFunc>

         <ButtonToClear clearInput={this.clearInput}>Clear</ButtonToClear>

        </div>
      </div>
    );
  }
}

export default App;