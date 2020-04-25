import React, { Component } from "react";


class ButtonToClear extends Component {
  render() {
    return( 
      <div id="clear" onClick={() => this.props.clearInput()}>
        {this.props.children}
      </div>
    )
  }
}

export default ButtonToClear;