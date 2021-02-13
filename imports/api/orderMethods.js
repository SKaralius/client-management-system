import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
import { OrdersCollection } from "../db/orders";

Meteor.methods({
  "orders.insert"(name) {
    check(name, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authenticated.");
    }

    OrdersCollection.insert({
      userId: Meteor.userId(),
      name,
      createdAt: new Date(),
    });
  },
});
