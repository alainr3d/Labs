define([
    'backbone',
    'views/dishView'
],function(Backbone,DishView){
    
    var DishListView = Backbone.View.extend({
        
        tagName : 'div',
        render : function(){
            
            for (var i = 0; i < 3; i++) {
                //list 3 views
                this.$el.append(new DishView({}).render().el);    
            }
            
            return this;
        }
        
    });
    
    return DishListView;
    
});