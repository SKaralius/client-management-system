import { Meteor } from "meteor/meteor";
import { OrdersCollection } from "../../db/orders";

Meteor.publish("orders", function publishOrders() {
  return OrdersCollection.find({ userId: this.userId });
});
