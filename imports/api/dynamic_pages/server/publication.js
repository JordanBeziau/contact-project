import { Meteor } from "meteor/meteor";
import { DynamicPages } from "../dynamic_pages";

Meteor.publish("dynamic_pages.all", function() {
  return DynamicPages.find({}); // no fetch in publication
});
