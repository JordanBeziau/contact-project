import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import AdminPages from "/imports/pages/admin/AdminPages";

import Navbar from "/imports/components/navigation/Navbar";

export default class extends Component {
  componentWillMount = () => {
    if (!Roles.userIsInRole(Meteor.userId(), "admin")) {
      if (Meteor.userId()) this.redirectTo("/", "Vous n'avez pas les droits !");
      else this.redirectTo("/signin", "Vous n'êtes pas connecté !");
    } else {
      this.setState({ isAdmin: true });
    }
  };

  componentDidUpdate = () => {
    if (!this.state.isAdmin) {
      this.redirectTo("/signin", "Vous êtes déconnecté !");
    }
  };

  redirectTo = (route, message) => {
    alert(message);
    this.props.history.push(route);
  };

  logoutUpdate = isAdmin => {
    this.setState({ isAdmin });
  };

  render() {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          <Navbar admin={true} forceUpdate={this.logoutUpdate} />
        </Grid.Column>
        <Grid.Column width={16}>
          <Switch>
            <Route path="/admin/pages" component={AdminPages} />
            <Route path="*" component={NotFoundAdmin} />
          </Switch>
        </Grid.Column>
      </Grid>
    );
  }
}

export const NotFoundAdmin = () => {
  return <h1>ADMIN PAGE NOT FOUND</h1>;
};
