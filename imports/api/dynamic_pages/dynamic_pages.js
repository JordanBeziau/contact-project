import { Mongo } from "meteor/mongo";

export const DynamicPages = new Mongo.Collection("dynamic_pages");

const DynamicPagesSchema = new SimpleSchema({
  title: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  active: {
    type: Boolean,
    defaultValue: true
  },
  created_at: {
    type: Date,
    defaultValue: new Date()
  },
  image_url: {
    type: String,
    optional: true
  }
});

DynamicPages.attachSchema(DynamicPagesSchema);
