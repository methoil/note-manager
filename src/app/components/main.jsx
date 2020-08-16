import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { history } from "../store/history";
import { ConnectedDashboard } from "./dashboard";
import { Router, Route } from "react-router-dom";
import { ConnectedNavigation } from "./navigation";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        {/* <ConnectedDashboard></ConnectedDashboard> */}
        <ConnectedNavigation/>
        <Route
          exact
          path="/dashboard"
          render={() => <ConnectedDashboard />}
        ></Route>
      </div>
    </Provider>
  </Router>
);
