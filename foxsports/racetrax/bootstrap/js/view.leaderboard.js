//leaderboard view
var LeaderboardView = Backbone.View.extend({

    tagName: 'tbody',
    initialize: function(){
        this.collection.on('change',this.render,this);
    },
    render: function() {
        //iterate collection
        this.collection.each(this.addOne, this);
        return this;

    },
    addOne: function(driver) {
        var driverView = new LeaderboardDriverView({
            model: driver
        });
        this.$el.append(driverView.render().el);
    }
});