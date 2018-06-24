import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.timeString = this.timeString.bind(this);
  }

  timeString() {
    // format hours
    let hours = this.props.date.getHours();
    let displayHours = (hours + 1) % 13;
    // format minutes
    let minutes = this.props.date.getMinutes();
    minutes = String(minutes).length === 2 ? minutes : `0` + minutes;

    let seconds = this.props.date.getSeconds();
    let halves = [`am`, `pm`];

    let half = hours < 11 ? halves[0] : halves[1];
    return `${displayHours}:${minutes}:${seconds}${half}`;
  }

  render() {
    return (
      <div id="ticker" className="appDiv">
        {this.timeString()}
      </div>
    );
  }
}
