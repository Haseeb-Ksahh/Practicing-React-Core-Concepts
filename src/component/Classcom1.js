import React, { Component } from "react";
import Child from "./Classchid";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "haseeb shaikh",
        email: "haseebshaikh25ks@gmail.com",
      },
    };
    console.log("Parent constructor component");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  componentDidUpdate() {
    console.log("Parent component did update");
  }

  handleChange = () => {
    this.setState({
      user: {
        ...this.state.user,
        name: "Ksahh shaikh",
      },
    });
  };

  render() {
    console.log("Parent render component");
    return (
      <>
        <button onClick={this.handleChange}>Change name to Ksahh</button>
        <Child user={this.state.user} />
      </>
    );
  }
}

export default Parent;
