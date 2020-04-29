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
      clickedEquals: null
    };
    this.factorialSinCos = this.factorialSinCos.bind(this);
    this.absVal = this.absVal.bind(this);
  }
  

  tallytoInput = value => {
    if ((this.state.currentNum === "") && this.state.prevNum === "" && this.state.operator === "-") {
      this.setState({ 
        input: (value * -1),
        // input: (this.state.input + value * -1)
      });
    } else {
      this.setState({ 
        input: this.state.input + value 
      });
    }
  };
  

  clearInput = () => {
    this.setState({ 
      prevNum: "",
      input: "",
      currentNum: "",
      operator: "",
      clickedEquals: null
    });
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
  
  
  backspace = () => {
    try {
      this.setState({
        input: this.state.input.toString().slice(0, -1)
      })
    } catch (e) {
      this.setState({
            input: "error"
        })
      }
    };


  decimal = value => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ 
        input: this.state.input + value 
      });
    }
  };
  
  
  equals = () => { 
    this.state.currentNum = this.state.input;
    this.setState({
      clickedEquals: true
    })
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
    }  else if (this.state.operator === "^" && this.state.currentNum === "" && this.state.prevNum === "" && this.state.operator === "-") {
        this.setState({
          input: (parseFloat(this.state.prevNum) ** parseFloat(this.state.currentNum)) * -1
        })
      } else if (this.state.operator === "^" && this.state.input > 0) {
        this.setState({
          input: parseFloat(this.state.prevNum) ** parseFloat(this.state.currentNum)
        })
      }
    }
    

    absVal = (integer) => {
      return integer < 0 ? -integer : integer;
    }

    
    sin = () => {
    // debugger
    let x = this.state.input;
    while (this.absVal(x) > ( 2 * 3.14159)) {
      x -= (x / this.absVal(x)) * (2 * 3.14159)
    }
    let estimate = (x - ((x ** 3) / this.factorialSinCos(3)) + ((x ** 5) / this.factorialSinCos(5)) - ((x ** 7) / this.factorialSinCos(7)) + ((x ** 9) / this.factorialSinCos(9))).toString();
    if (estimate > 1.0) {
      estimate = 1
    }
    else if (estimate < -1.0) {
      estimate = -1.0
    }
    this.setState({
        input: estimate,
        operator: `sin(${this.state.input}) =`,
        prevNum: "",
        currentNum: ""
      })
  }

  cos = () => {
    let x = this.state.input;
    while (this.absVal(x) > ( 2 * 3.14159)) {
      x -= (x / this.absVal(x)) * (2 * 3.14159)
    }
    let estimate = (1 - ((x ** 2) / this.factorialSinCos(2)) + ((x ** 4) / this.factorialSinCos(4)) - ((x ** 6) / this.factorialSinCos(6)) + ((x ** 8) / this.factorialSinCos(8))).toString();
    if (estimate > 1.0) {
      estimate = 1
    }
    else if (estimate < -1.0) {
      estimate = -1.0
    }
    this.setState({
        input: estimate,
        operator: `cos(${this.state.input}) =`,
        prevNum: "",
        currentNum: ""
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
    if (this.state.input < 0) {
      this.setState({
        input: "Error"
      })
    } else {
        if (num === 0) return 1;
        let f = 1;
        for (let i = 1; i < num; i++) {
          f = f * (i + 1);
        }
        this.setState({
          input: f,
          operator: `${this.state.input}! =`,
          prevNum: "",
          currentNum: ""
        })
    }
  }

  
  plusMinusOperator = () => {
    this.setState({
      input: this.state.input * -1
    })
  }

  percentage = () => {
    this.setState({
      input: this.state.input / 100,
      operator: `${this.state.input}% =`,
      prevNum: "",
      currentNum: ""
    })
  }
  

  squareRoot = () => {
    if (this.state.input < 0) {
      this.setState({
        input: "Error"
      })
    } else {
    this.setState({
      input: this.state.input **(1/2),
      operator: `√ ${this.state.input} =`,
      prevNum: "",
      currentNum: ""

    })
  }
  }
  
  


  render() {
    console.log(this.state.prevNum)
    return (
      <div className="App">
        <div >
          <h1 id="title">Calculator</h1>
          <h4 id="name">Bronte Sewell</h4>
          <div id="equation">
              <h6 id="prevNum">{this.state.prevNum}</h6>
              <h6>{this.state.operator}</h6>
              <h6>{this.state.currentNum}</h6>
              {this.state.clickedEquals ? <h6> = </h6> : null}
              <h6> {this.state.input}</h6>
          </div>
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
              <button className="buttons" value="/" onClick={this.operatorClicked}>/</button>
              <button className="buttons" value="*" onClick={this.operatorClicked}>*</button>
            </div>

            <div className="rows">
              <button className="buttons" value="+" onClick={this.operatorClicked}>+</button>
              <button className="buttons" value="-" onClick={this.operatorClicked}>-</button>
              <button className="buttons" onClick={this.squareRoot} >√</button>
              <button className="buttons" value="^" onClick={this.operatorClicked}>y^x</button>
            </div>

            <div className="rows">
              <ButtonsForFunc handleNumClick={this.decimal}>.</ButtonsForFunc>
              <button className="buttons" onClick={this.factorial}>x!</button>
              <button className="buttons" onClick={this.sin}>sin</button> 
              <button className="buttons" onClick={this.cos}>cos</button> 
              <button className="buttons" onClick={this.percentage}>%</button> 
              
            </div>

            <div className="rows">
              <button className="buttons" onClick={this.plusMinusOperator}>+/-</button>
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