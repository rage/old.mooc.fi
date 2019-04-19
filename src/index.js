import React from "react";
import { render, hydrate } from "react-dom";
import { loadComponents, getState } from "loadable-components";
import App from "./App";

import "typeface-roboto";
import "typeface-open-sans-condensed";
import { unregister } from "./registerServiceWorker";

window.snapSaveState = () => getState();

unregister()

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  loadComponents().then(() => {
    hydrate(<App />, rootElement);
  });
} else {
  render(<App />, rootElement);
}
