import React, { Fragment } from "react";
import Router from "./Router";
import registerServiceWorker from "./registerServiceWorker";

import trackHeight from "./util/trackHeight";
import NewContentPopup from "./components/NewContentPopup";
import Notification from "./components/Notification";

export default class App extends React.Component {
  state = {
    updateAvailable: false,
  };

  componentDidMount() {
    registerServiceWorker(this.onUpdateAvailable);
    trackHeight();
  }

  onUpdateAvailable = () => {
    this.setState({ updateAvailable: true });
  };

  render() {
    return (
      <Fragment>
        <Router />
        <Notification />
        <NewContentPopup updateAvailable={this.state.updateAvailable} />
      </Fragment>
    );
  }
}
