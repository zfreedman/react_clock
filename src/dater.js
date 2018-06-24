import React from "react";

export default class Dater extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: this.props.day,
      month: this.props.month,
      year: this.props.year
    };

    this.dateString = this.dateString.bind(this);
  }

  dateString() {
    let months = [
      `January`, `February`, `March`, `April`, `May`, `June`,
      `July`, `August`, `September`, `October`, `November`, `December`
    ];
    let m = months[this.props.date.getMonth()];
    let d = this.props.date.getDay();
    let y = this.props.date.getFullYear();
    return `${m} ${d}, ${y}`;
  }

  render() {
    return (
      <div id="dater" className="appDiv">
        {this.dateString()}
      </div>
    );
  }
}
