import React, { Component } from "react";


class ButtonToClear extends Component {
  render() {
    return( 
      <div onClick={() => this.props.clearInput()}>
        {this.props.children}
      </div>
    )
  }
}

export default ButtonToClear;