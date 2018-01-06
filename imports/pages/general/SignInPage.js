import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Grid, Header, Button } from "semantic-ui-react";

import SignInForm from "/imports/components/accounts/SignInForm";
import SignUpForm from "/imports/components/accounts/SignUpForm";

class SignInPage extends Component {
  state = {
    signing_up: false
  };

  toggleState = event => {
    this.setState({ [event.target.name]: !this.state[event.target.name] });
  };

  on_connected = () => {
    this.props.history.push("/");
  };

  render() {
    const { signing_up } = this.state;
    return (
      <Grid stackable>
        {signing_up ? (
          <Grid.Column width={16}>
            <Header as="h1">Sign Up</Header>
            <SignUpForm />
          </Grid.Column>
        ) : (
          <Grid.Column width={16}>
            <Header as="h1">Sign In</Header>
            <SignInForm onSignedIn={this.on_connected} />
          </Grid.Column>
        )}
        <Grid.Column width={16}>
          <Button onClick={this.toggleState} name="signing_up">
            {signing_up ? "J'ai déjà un compte" : "Créer un compte"}
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(SignInPage);
