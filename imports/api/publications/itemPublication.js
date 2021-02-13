import { Meteor } from "meteor/meteor";
import { ItemsCollection } from "../../db/items";

Meteor.publish("items", function publishItems() {
  return ItemsCollection.find({ userId: this.userId });
});
