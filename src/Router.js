import React, { Fragment } from "react";
import { Switch, Router, Route } from "react-router-dom";
import { languages, withContext } from "./contexes/LanguageContext";
import loadable from "loadable-components";
import { createBrowserHistory } from "history";
import initGa from "./util/initGa";

const history = createBrowserHistory();

const Index = loadable(() => import("./pages/Index"));
const Account = loadable(() => import("./pages/Account"));
const Redirector = loadable(() => import("./pages/Redirector"));
const TeacherGuide = loadable(() => import("./pages/TeacherGuide"));
const NotFoundPage = loadable(() => import("./pages/404"));
const RegisterCompletionPage = loadable(() =>
  import("./pages/RegisterCompletion")
);

initGa(history);

export default () => (
  <Router history={history}>
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
        <Route exact path="/teachers" component={TeacherGuide} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route
          path="/register-completion/:course_slug"
          component={RegisterCompletionPage}
        />
        <Route
          path="/en/register-completion/:course_slug"
          component={withContext(RegisterCompletionPage, languages.english)}
        />
        <Route
          exact
          path="/en/account"
          component={withContext(Account, languages.english)}
        />
        <Route
          exact
          path="/en/teachers"
          component={withContext(TeacherGuide, languages.english)}
        />
        <Route
          exact
          path="/en/404"
          component={withContext(NotFoundPage, languages.english)}
        />
        <Route component={Redirector} />
      </Switch>
    </Fragment>
  </Router>
);
