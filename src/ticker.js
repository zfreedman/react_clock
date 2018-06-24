import React from "react";

export default class Ticker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tick: 50,
      time: Date.now()
    };

    this.updateTime = this.updateTime.bind(this);
    // need to store reference to this incase we want to stop interval
    setInterval(this.updateTime, this.state.tick);
  }

  updateTime() {
    this.setState({time: Date.now()});
  }

  render() {
    return (
      <div id="ticker" className="appDiv">
        {this.state.time}
      </div>
    );
  }
}
