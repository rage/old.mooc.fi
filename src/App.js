import React from "react";
import Router from "./Router";
import trackHeight from "./util/trackHeight";

export default class App extends React.Component {
  componentDidMount() {
    trackHeight();
  }

  render() {
    return <Router />;
  }
}
