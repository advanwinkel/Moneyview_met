JsonRoutes.Middleware.use(JsonRoutes.Middleware.parseBearerToken);
JsonRoutes.Middleware.use(
  JsonRoutes.Middleware.authenticateMeteorUserByToken
);

Meteor.publish('tabs', function () {
	return Ratetabs.find({}, {sort: {timestamp: 1}});
});

Meteor.publish('apirt', function () {
	return Ratetabs.find({}, {sort: {timestamp: 1}});
}, {
  url: "apirt"
});

Meteor.publish("apirt-authorized", function () {
  if (this.userId) {
    return Ratetabs.find({}, {sort: {timestamp: 1}});
  } else {
  	console.log("No userid")
    this.ready();
  }
}, {
  url: "apirt-authorized"
});