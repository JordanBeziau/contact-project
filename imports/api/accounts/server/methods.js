import { Meteor } from "meteor/meteor";
Meteor.methods({
  "accounts.signup"({ email, password, password_confirmation, username }) {
    Accounts.createUser({ email, password, password_confirmation, username });
  }
});
