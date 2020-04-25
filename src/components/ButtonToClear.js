import React, { Component } from "react";


class ButtonToClear extends Component {
  render() {
    return( 
      <div id="clear" onClick={() => this.props.clearInput()}>
        Clear
      </div>
    )
  }
}

export default ButtonToClear;