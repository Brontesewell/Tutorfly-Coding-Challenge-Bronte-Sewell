import React, { Component } from "react";

class ButtonsForFunc extends Component {

  render() {
    return( 
      <div onClick={() => this.props.handleNumClick(this.props.children)}>
        {this.props.children}
      </div>
    )
  }
}

export default ButtonsForFunc;