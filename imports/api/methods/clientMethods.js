import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
import { ClientsCollection } from "../../db/clients";

Meteor.methods({
  "clients.insert"(name) {
    check(name, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authenticated.");
    }

    ClientsCollection.insert({
      userId: Meteor.userId(),
      name,
      createdAt: new Date(),
    });
  },
  "clients.update"(selector, name) {
    check(name, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authenticated.");
    }

    ClientsCollection.update(selector, {
      userId: Meteor.userId(),
      name,
      createdAt: new Date(),
    });
  },
});
