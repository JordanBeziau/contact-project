import React, { Component } from "react";
import { Form, Input, Button, Label } from "semantic-ui-react";

export default class extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  submitForm = event => {
    event.preventDefault();
    Meteor.call("accounts.signup", this.state, (err, res) => {
      if (err) {
        alert("Erreur lors de l'inscription :" + err);
      } else {
        Meteor.loginWithPassword(
          this.state.email,
          this.state.password,
          (err, res) => {
            if (err) console.log("Erreur de connexion : " + err);
            else console.log("Vous êtes bien connecté !");
          }
        );
      }
    });
  };

  render() {
    const { username, email, password, password_confirmation } = this.state;
    const form_valid =
      password && password === password_confirmation && username.length > 5;
    return (
      <Form onSubmit={this.submitForm}>
        <Form.Field>
          <Label>Username</Label>
          <Form.Input
            type="text"
            value={username}
            onChange={this.handleChange}
            name="username"
          />
        </Form.Field>
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
          <Label>Password confirmation</Label>
          <Input
            type="password"
            value={password_confirmation}
            onChange={this.handleChange}
            name="password_confirmation"
          />
          {password !== password_confirmation && (
            <Label>Differents passswords</Label>
          )}
        </Form.Field>
        <Form.Field>
          <Button disabled={!form_valid} color="green">
            Sign Up
          </Button>
        </Form.Field>
      </Form>
    );
  }
}
