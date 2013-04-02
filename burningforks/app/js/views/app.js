define([
    'backbone',
    'jquery',
    'js/views/dishListView.js'
],function(Backbone,$,DishListView){
    
    var AppView = function(){
        
        var dlv = new DishListView({});
        
        $('.container').append(dlv.render().el);
        
        $('.search').click(function(ev){
            var el = ev.currentTarget;
            $(el).addClass('selected')
                .find('.search-input')
                .focus()
                .focusout(function(ev){
                    $('.search').removeClass('selected');
                });
        });
        
        setTimeout(function () {
          window.scrollTo(0, 1);
        }, 1000);
    }
    
    return AppView;
    
});