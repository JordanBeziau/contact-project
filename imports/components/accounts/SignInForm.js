import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Label } from "semantic-ui-react";

class SignInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  submitForm = event => {
    event.preventDefault();
    Meteor.loginWithPassword(
      this.state.email,
      this.state.password,
      (err, res) => {
        if (err) console.log("Erreur de connexion : " + err);
        else this.props.onSignedIn();
      }
    );
  };

  render() {
    const { username, email, password } = this.state;
    const form_valid = email.length > 0 && password.length > 0;
    return (
      <Form onSubmit={this.submitForm}>
        <Form.Field>
          <Label>Email</Label>
          <Input
            type="text"
            value={email}
            onChange={this.handleChange}
            name="email"
          />
        </Form.Field>
        <Form.Field>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={this.handleChange}
            name="password"
          />
        </Form.Field>
        <Form.Field>
          <Button disabled={!form_valid} color="green">
            Sign In
          </Button>
        </Form.Field>
      </Form>
    );
  }
}

export default withRouter(SignInForm);
