import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

// Name of the file should be same as that component
// There should be only one component per file
class ContainerComponent extends Component {
  render() {
    return (
      <div>
        <span>This is a parent component</span>
        <ChildComponent />
      </div>
    );
  }
}

// Component should be default exported at the end of the file
export default ContainerComponent;
