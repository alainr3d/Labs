define([
    'backbone',
    'helpers'
],function(Backbone,Helpers){
    
    var DishView = Backbone.View.extend({
        
        tagName : 'article',
        template: Helpers.template('dish-template'),
        events : {
            'click h2' : function(){console.log('clicked');return false;}
        },
        render : function(){
            
            var model = this.model.toJSON();
            console.log(model.primaryImage);
            this.$el.addClass('dish')
                .css('background-image','url('+model.primaryImage+')')
                .html(this.template(model));
            
            return this;
        }
        
    });
    
    return DishView;
    
});