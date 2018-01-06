import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminLayout from "/imports/layouts/AdminLayout";
import MainLayout from "/imports/layouts/MainLayout";

export default class extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Route path="*" component={MainLayout} />
        </Switch>
      </Router>
    );
  }
}
