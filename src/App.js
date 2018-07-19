import React, { Fragment } from "react";
import Router from "./Router";
import registerServiceWorker from "./registerServiceWorker";

import trackHeight from "./util/trackHeight";
import NewContentPopup from "./components/NewContentPopup";

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
        <NewContentPopup updateAvailable={this.state.updateAvailable} />
      </Fragment>
    );
  }
}
