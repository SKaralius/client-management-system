import { Meteor } from "meteor/meteor";
import { ClientsCollection } from "../../db/clients";

Meteor.publish("clients", function publishClients() {
  return ClientsCollection.find({ userId: this.userId });
});
