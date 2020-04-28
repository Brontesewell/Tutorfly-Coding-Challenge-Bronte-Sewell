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
    this.factorialSinCos = this.factorialSinCos.bind(this);
    this.absVal = this.absVal.bind(this);
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
    console.log(this.state.operator)
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
    } else if (this.state.operator === "factorial") {
      this.setState({
        input: parseFloat(this.state.prevNum) ** parseFloat(this.state.currentNum)
      })
    } 
  }

  absVal = (integer) => {
    return integer < 0 ? -integer : integer;
  }

  sin = () => {
    let x = this.state.input;
    while (this.absVal(x) > ( 2 * 3.14159)) {
      x -= (x / this.absVal(x)) * (2 * 3.14159)
    }
    let estimate = (x - ((x ** 3) / this.factorialSinCos(3)) + ((x ** 5) / this.factorialSinCos(5)) - ((x ** 7) / this.factorialSinCos(7)) + ((x ** 9) / this.factorialSinCos(9))).toString();
    let boundedEstimate = Math.min(estimate, 1.0);
    let boundedEstimate2 = Math.max(boundedEstimate, -1.0);
    this.setState({
        input: boundedEstimate2
      })
    }

  cos = () => {
    let x = this.state.input;
    while (this.absVal(x) > ( 2 * 3.14159)) {
      x -= (x / this.absVal(x)) * (2 * 3.14159)
    }
    let estimate = (1 - ((x ** 2) / this.factorialSinCos(2)) + ((x ** 4) / this.factorialSinCos(4)) - ((x ** 6) / this.factorialSinCos(6)) + ((x ** 8) / this.factorialSinCos(8))).toString();
    let boundedEstimate = Math.min(estimate, 1.0);
    let boundedEstimate2 = Math.max(boundedEstimate, -1.0);
    this.setState({
        input: boundedEstimate2
      })
    }


  factorialSinCos = (value) => {
    if (value === 0) return 1;
    let f = 1;
    for (let i = 1; i < value; i++) {
        f = f * (i + 1);
      }
      return f;
  }

  factorial = () => {
    let num = this.state.input;
    if (num === 0) return 1;
    let f = 1;
    for (let i = 1; i < num; i++) {
        f = f * (i + 1);
      }
    this.setState({
      input: f
    })
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
  }



  render() {
    // console.log(this.state.operator)
    // console.log(this.state.prevNum ** this.state.input)
  
 
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
              <button className="buttons" value="/" onClick={this.operatorClicked}>/</button>
              <button className="buttons" value="*" onClick={this.operatorClicked}>*</button>
            </div>

            <div className="rows">
              <button className="buttons" value="+" onClick={this.operatorClicked}>+</button>
              <button className="buttons" value="-" onClick={this.operatorClicked}>-</button>
              <button className="buttons" onClick={this.squareRoot} >√</button>
              <button className="buttons" value="factorial" onClick={this.operatorClicked}>y^x</button>
            </div>

            <div className="rows">
              <ButtonsForFunc handleNumClick={this.decimal}>.</ButtonsForFunc>
              <button className="buttons" onClick={this.plusMinusOperator}>+/-</button>
              <button className="buttons" onClick={this.factorial}>!</button>
              <button className="buttons" onClick={this.sin}>sin</button> 
              <button className="buttons" onClick={this.cos}>cos</button> 
            </div>

            <div className="rows">
              <ButtonsForFunc handleNumClick={this.equals}>=</ButtonsForFunc>        
               <ButtonToClear clearInput={this.clearInput}/>
               <button id="back-button" onClick={() => this.backspace()}>Back</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;