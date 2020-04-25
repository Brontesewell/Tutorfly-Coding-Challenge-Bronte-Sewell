import React, { Component } from "react";

class ButtonsForFunc extends Component {

  render() {
    return( 
      <div className="buttons" onClick={() => this.props.handleNumClick(this.props.children)}>
        {this.props.children}
      </div>
    )
  }
}

export default ButtonsForFunc;