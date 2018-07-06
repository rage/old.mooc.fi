import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import { languages, withContext } from "./contexes/LanguageContext";
import Account from "./pages/Account";
import Redirector from "./components/Redirector";

export default () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/fi" component={Index} />
        <Route
          exact
          path="/en"
          component={withContext(Index, languages.english)}
        />
        <Route exact path="/account" component={Account} />
        <Route component={Redirector} />
      </Switch>
    </Fragment>
  </Router>
);
