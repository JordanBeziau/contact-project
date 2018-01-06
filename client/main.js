import "semantic-ui-css/semantic.min.css";
import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";

import App from "/imports/startup/App";

Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});
