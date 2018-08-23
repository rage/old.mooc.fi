import React from "react";
import { render, hydrate } from "react-dom";
import { loadComponents } from "loadable-components";
import { getState } from "loadable-components/snap";
import App from "./App";

import "typeface-roboto";
import "typeface-open-sans-condensed";

window.snapSaveState = () => getState();

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  loadComponents().then(() => {
    hydrate(<App />, rootElement);
  });
} else {
  render(<App />, rootElement);
}
