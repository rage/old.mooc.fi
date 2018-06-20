import React from "react";
import { render, hydrate } from "react-dom";
import Router from "./Router";
import registerServiceWorker from "./registerServiceWorker";

import "typeface-roboto";
import "typeface-open-sans-condensed";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Router />, rootElement);
} else {
  render(<Router />, rootElement);
}

registerServiceWorker();
