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

  tallytoInput = value => {
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

  decimal = value => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ 
        input: this.state.input + value 
      });
    }
  };
  

  render() {
    console.log(this.state.input)
    return (
      <div className="App">
        <div >
         <h1 id="title">Calculator</h1>
         <h4 id="name">Bronte Sewell</h4>
         <Input input={this.state.input}/>
            <div className="rows">
              <ButtonsForFunc handleNumClick={this.tallytoInput}>1</ButtonsForFunc>
              <ButtonsForFunc handleNumClick={this.tallytoInput}>2</ButtonsForFunc>
              <ButtonsForFunc handleNumClick={this.tallytoInput}>3</ButtonsForFunc>
            </div>

            <div className="rows">
              <ButtonsForFunc handleNumClick={this.tallytoInput}>4</ButtonsForFunc> 
              <ButtonsForFunc handleNumClick={this.tallytoInput}>5</ButtonsForFunc>
              <ButtonsForFunc handleNumClick={this.tallytoInput}>6</ButtonsForFunc>
            </div>

            <div className="rows">
              <ButtonsForFunc handleNumClick={this.tallytoInput}>7</ButtonsForFunc>
              <ButtonsForFunc handleNumClick={this.tallytoInput}>8</ButtonsForFunc>
              <ButtonsForFunc handleNumClick={this.tallytoInput}>9</ButtonsForFunc>
            </div>

            <div className="rows">
              <ButtonsForFunc handleNumClick={this.tallytoInput}>0</ButtonsForFunc>
              <ButtonsForFunc handleNumClick={this.divide}>/</ButtonsForFunc>
              <ButtonsForFunc handleNumClick={this.multiply}>*</ButtonsForFunc>
            </div>

            <div className="rows">
              <ButtonsForFunc handleNumClick={this.add}>+</ButtonsForFunc>
              <ButtonsForFunc handleNumClick={this.subtract}>-</ButtonsForFunc>
              <ButtonsForFunc handleNumClick={this.decimal}>.</ButtonsForFunc>
              <ButtonsForFunc handleNumClick={this.equals}>=</ButtonsForFunc>
            </div>

            <div id="clear">
               <ButtonToClear clearInput={this.clearInput}>Clear</ButtonToClear>
            </div>
        </div>
      </div>
    );
  }
}

export default App;