//leaderboarddriver view
var LeaderboardDriverView = Backbone.View.extend({

    tagName: 'tr',
    events: {
        'click': 'trackDriver'
    },
    template: template('leaderboarddriver-template'),
    initialize: function() {
        // track chances to model
        this.model.on('change',this.render,this);
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    trackDriver: function() {
        this.$el.addClass('clicked');
        setTimeout($.proxy(function(){
            this.$el.removeClass('clicked');
        },this), 200);
        
        var trackerDriverView = new TrackerDriverView({
            model: this.model
        });
        $('#driverTracker').append(trackerDriverView.render().el);
    }

});