import { Meteor } from "meteor/meteor";
import { DynamicPages } from "../dynamic_pages";

Meteor.methods({
  "dynamic_pages.insert"(data) {
    console.log("DYNAMIC PAGES INSERT");
    DynamicPages.insert(data);
  },
  "dynamic_pages.remove"(id) {
    console.log("DYNAMIC PAGES REMOVED");
    DynamicPages.remove(id);
  }
});
