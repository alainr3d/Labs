//collection
var DriverCollection = Backbone.Collection.extend({
    model: Driver,
    url: '/racetrax'
});