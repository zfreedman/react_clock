import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: Date.now()
    };

    this.updateTime = this.updateTime.bind(this);
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
        <button onClick={this.updateTime}>Update</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById(`root`));
