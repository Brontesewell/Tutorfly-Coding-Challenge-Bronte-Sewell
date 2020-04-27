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


  operatorClicked = (e) => {
    const {value} = e.target
    this.state.prevNum = this.state.input
    this.setState({ 
      input: "",
      operator: value
      // you could also use [name]: value and add name to const {value, name} = e.target
    });
  };

  equals = () => { 
    this.state.currentNum = this.state.input;
    if (this.state.operator === "+") {
      this.setState({
        input: parseFloat(this.state.prevNum) + parseFloat(this.state.currentNum)
      });
    } else if (this.state.operator === "-") {
      this.setState({
        input: parseFloat(this.state.prevNum) - parseFloat(this.state.currentNum)
      });
    } else if (this.state.operator === "*") {
      this.setState({
        input: parseFloat(this.state.prevNum) * parseFloat(this.state.currentNum)
      });
    } else if (this.state.operator === "/") {
      this.setState({
        input: parseFloat(this.state.prevNum) / parseFloat(this.state.currentNum)
      });
    } else if (this.state.operator === "**") {
      this.setState({
        input: parseFloat(this.state.prevNum) ** parseFloat(this.state.currentNum)
      })
    }
  }

  decimal = value => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ 
        input: this.state.input + value 
      });
    }
  };

  backspace = () => {
    this.setState({
        input: this.state.input.toString().slice(0, -1)
    })
};
  
addZeroToInput = value => {
  if (this.state.input !== "") {
    this.setState({ 
      input: this.state.input + value 
    });
  }
};

plusMinusOperator = () => {
  this.setState({
    input: this.state.input * -1
  })
}


squareRoot = () => {
  this.setState({
    input: this.state.input **(1/2)
  })

  // function squareRoot(number){
  //   var square = 1, i=0;
  //   while(true)
  //   {
  //   i = i + 1;
  //   square = (number / square + square)
}

  render() {
    // console.log("Input is:", this.state.input)
    // this.state.prevNum, this.state.operator, this.state.currentNum, this.state.input, "curr is:",  "opp is:", this.state.operator
    console.log(this.state.operator)
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
              <ButtonsForFunc handleNumClick={this.addZeroToInput}>0</ButtonsForFunc>
              <button className="buttons" value="/" name="operator" onClick={this.operatorClicked}>/</button>
              <button className="buttons" value="*" name="operator" onClick={this.operatorClicked}>*</button>
            </div>

            <div className="rows">
              <button className="buttons" value="+" name="operator" onClick={this.operatorClicked}>+</button>
              <button className="buttons" value="-" name="operator" onClick={this.operatorClicked}>-</button>
              <button className="buttons" onClick={this.squareRoot} >√</button>
            </div>

            <div className="rows">
              <ButtonsForFunc handleNumClick={this.decimal}>.</ButtonsForFunc>
              <button className="buttons" onClick={this.plusMinusOperator}>+/-</button>
              <button className="buttons" value="**" name="operator" onClick={this.operatorClicked}>^</button>
              <ButtonsForFunc handleNumClick={this.equals}>=</ButtonsForFunc>
              {/* √ */}
              
            </div>

            <div className="rows">
               <ButtonToClear clearInput={this.clearInput}/>
               <button id="back-button" onClick={() => this.backspace()}>Back</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;