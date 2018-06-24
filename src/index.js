import React from "react";
import ReactDOM from "react-dom";

import Dater from "./dater";
import Timer from "./timer";
import Ticker from "./ticker";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      tick: 1000,
    };

    this.updateDate = this.updateDate.bind(this);

    setInterval(this.updateDate, this.state.tick);
  }

  updateDate() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <Dater date={this.state.date} />
        <Timer date={this.state.date} />
        <Ticker
          tick={this.state.tick}
          time={this.state.date.getTime()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById(`root`));
