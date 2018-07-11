import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { languages, withContext } from "./contexes/LanguageContext";
import loadable from "loadable-components";

const Index = loadable(() => import("./pages/Index"));
const Account = loadable(() => import("./pages/Account"));
const Redirector = loadable(() => import("./pages/Redirector"));
const TeacherGuide = loadable(() => import("./pages/TeacherGuide"));
const NotFoundPage = loadable(() => import("./pages/404"));

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
        <Route exact path="/opettajille" component={TeacherGuide} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route component={Redirector} />
      </Switch>
    </Fragment>
  </Router>
);
