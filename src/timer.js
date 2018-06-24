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

    let minutes = String(this.props.date.getMinutes()).padStart(2, 0);
    let seconds = String(this.props.date.getSeconds()).padStart(2, 0);

    let halves = [`am`, `pm`];
    let half = hours < 11 ? halves[0] : halves[1];

    return `${displayHours}:${minutes}:${seconds}${half}`;
  }

  render() {
    return (
      <div id="timer" className="appDiv">
        {this.timeString()}
      </div>
    );
  }
}
