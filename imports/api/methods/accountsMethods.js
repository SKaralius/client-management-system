import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

Meteor.methods({
  "accounts.insert"(username, password) {
    check(username, String);
    check(password, String);

    Accounts.createUser({
      username: username,
      password: password,
    });
  },
});
