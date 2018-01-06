import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";

export default class DynamicPageForm extends Component {
  state = {
    title: "",
    description: "",
    image_url: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit_form = event => {
    event.preventDefault();
    Meteor.call("dynamic_pages.insert", this.state, (err, res) => {
      if (err) {
        Bert.alert({
          title: "Error",
          message: err,
          type: "danger",
          style: "growl-bottom-left"
        });
      } else {
        Bert.alert({
          title: "Page created",
          type: "success",
          style: "growl-bottom-left"
        });
        this.setState({ title: "", description: "", image_url: "" });
      }
    });
  };

  render() {
    const { title, description, image_url } = this.state;
    return (
      <Form onSubmit={this.submit_form}>
        <Form.Field>
          <label>Page title</label>
          <Input
            type="text"
            onChange={this.handleChange}
            name="title"
            value={title}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Page description</label>
          <Input
            type="text"
            onChange={this.handleChange}
            name="description"
            value={description}
          />
        </Form.Field>
        <Form.Field>
          <label>Image</label>
          <Input
            type="text"
            onChange={this.handleChange}
            name="image_url"
            value={image_url}
          />
        </Form.Field>
        <Button color="green">Create page</Button>
      </Form>
    );
  }
}
