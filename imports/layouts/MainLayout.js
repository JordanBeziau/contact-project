import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Grid, Container } from "semantic-ui-react";

import Landing from "/imports/pages/general/Landing";
import SignInPage from "/imports/pages/general/SignInPage";
import NotFound from "/imports/pages/general/NotFound";

import Navbar from "/imports/components/navigation/Navbar";

export default class extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          <Navbar />
        </Grid.Column>
        <Grid.Column width={16}>
          <Container>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/SignIn" component={SignInPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Container>
        </Grid.Column>
      </Grid>
    );
  }
}
