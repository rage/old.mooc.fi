import React from "react";
import { render, hydrate } from "react-dom";
import { loadComponents, getState } from "loadable-components";
import App from "./App";

import "typeface-roboto";
import "typeface-open-sans-condensed";
import { unregister } from "./registerServiceWorker";

window.snapSaveState = () => getState();

unregister();
try {
  unregisterAndClearCaches();
} catch (e) {
  console.error(e);
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  loadComponents().then(() => {
    hydrate(<App />, rootElement);
  });
} else {
  render(<App />, rootElement);
}

async function unregisterAndClearCaches() {
  const registrations = await navigator.serviceWorker.getRegistrations();
  const unregisterPromises = registrations.map(registration =>
    registration.unregister()
  );

  const allCaches = await caches.keys();
  const cacheDeletionPromises = allCaches.map(cache => caches.delete(cache));

  await Promise.all([...unregisterPromises, ...cacheDeletionPromises]);
}
