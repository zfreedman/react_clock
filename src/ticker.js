import React from "react";

export default class Ticker extends React.Component {
  render() {
    return (
      <div id="ticker" className="appDiv">
        {this.props.time}
      </div>
    );
  }
}
