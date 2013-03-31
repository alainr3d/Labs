var TrackerDriverView = Backbone.View.extend({

    tagName: 'div',
    className: 'modal driver',
    events: {
        'click .removeDriver': 'removeDriver',
        'swipe': 'removeDriver'
    },
    template: template('trackerdriver-template'),
    initialize :function(){
   
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    removeDriver: function() {
        this.$el.addClass('remove');
        setTimeout($.proxy(function(){
            this.$el.removeClass('remove');
            this.remove();
        },this),300);
        
    }

});