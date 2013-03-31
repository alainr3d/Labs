define([
    'backbone'
],function(Backbone){
    
    var DishView = Backbone.View.extend({
        
        tagName : 'div',
        events : {
            'click h2' : function(){console.log('clicked');return false;}
        },
        render : function(){
            
            this.$el.html('<h2>dish view</h2>');
            
            return this;
        }
        
    });
    
    return DishView;
    
});