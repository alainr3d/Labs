define([
    'backbone',
    'views/dishView',
    'models/dishModel'
],function(Backbone,DishView,DishModel){
    
    var DishListView = Backbone.View.extend({
        
        tagName : 'div',
        render : function(){
            
            for (var i = 0; i < 3; i++) {
                //list 3 views
                this.$el.addClass('dish-list').append(new DishView({
                    model: new DishModel({
                        'title' : 'Chicken Burrito',
                        'restaurant' : 'Chipotle',
                        'miles' : '0.5mi',
                        'primaryImage' : 'http://static7.businessinsider.com/image/4d94aaa8cadcbb4669440000/chipotle.jpg'
                    })
                }).render().el);    
            }
            
            return this;
        }
        
    });
    
    return DishListView;
    
});