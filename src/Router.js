import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import EnglishIndex from "./pages/en/Index";
import { languages, withContext } from "./contexes/LanguageContext";

export default () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Index} />
      <Route exact path="/fi" component={Index} />
      <Route
        exact
        path="/en"
        component={withContext(EnglishIndex, languages.english)}
      />
    </Fragment>
  </Router>
);
