import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
import { ItemsCollection } from "../db/items";

Meteor.methods({
  "items.insert"(name) {
    check(name, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authenticated.");
    }

    ItemsCollection.insert({
      userId: Meteor.userId(),
      name,
      createdAt: new Date(),
    });
  },
});
