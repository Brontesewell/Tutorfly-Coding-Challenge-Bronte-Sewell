import React, { Component } from "react";

class Input extends Component {
  render() {
    return( 
      <div className="input">
        {this.props.input}
      </div>
    )
  }
}

export default Input;