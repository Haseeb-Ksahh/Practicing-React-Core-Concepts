import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
  }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       // Perform some action repeatedly at the specified interval
//       console.log("Interval callback");
//     }, 1000); // Interval of 1 second (1000 milliseconds)
//   }

//   componentWillUnmount() {
//     // Clear the interval when the component is unmounted
//     clearInterval(this.interval);
//   }

  render() {
    console.log("Child render");
    return (
      <h1>
        It's the child component. Name: {this.props.user.name}, Email:{" "}
        {this.props.user.email}
      </h1>
    );
  }
}

export default Child;
