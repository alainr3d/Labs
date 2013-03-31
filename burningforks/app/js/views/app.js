define([
    'backbone',
    'js/views/dishListView.js'
],function(Backbone,DishListView){
    
    var AppView = function(){
        console.log('test loader');
        
        var dlv = new DishListView({});
        
        $('.container').append(dlv.render().el);
    }
    
    return AppView;
    
});