import React, { Fragment } from "react";
import Router from "./Router";

import trackHeight from "./util/trackHeight";
import NewContentPopup from "./components/NewContentPopup";
import { unregister } from "./registerServiceWorker";

export default class App extends React.Component {
  state = {
    updateAvailable: false,
  };

  componentDidMount() {
    trackHeight();
    unregister()
  }

  onUpdateAvailable = () => {
    this.setState({ updateAvailable: true });
  };

  render() {
    return (
      <Fragment>
        <Router />
        <NewContentPopup updateAvailable={this.state.updateAvailable} />
      </Fragment>
    );
  }
}
