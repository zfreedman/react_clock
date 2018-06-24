import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tick: .1,
      time: Date.now()
    };

    this.updateTime = this.updateTime.bind(this);

    setInterval(this.updateTime, this.state.tick * 1000);
  }

  updateTime() {
    this.setState({
      time: Date.now()
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById(`root`));
