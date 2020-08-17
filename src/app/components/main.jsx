import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { store } from "../store/store";
import { history } from "../store/history";
import { ConnectedDashboard } from "./dashboard";
import { ConnectedNavigation } from "./navigation";
import { ConnectedTaskDetail } from "./task-detail";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route
          exact
          path="/dashboard"
        > <ConnectedDashboard /></Route>
        <Route
          exact
          path="/task/:id"
          render={({ match }) => (<ConnectedTaskDetail{...match} />)}
        ></Route>
      </div>
    </Provider>
  </Router>
);
