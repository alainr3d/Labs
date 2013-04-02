define([
    'backbone',
    'models/dishModel'
],function(Backbone,DishModel){
    
    /*
    var Filter = Backbone.Model.extend({
      url: '/filters/',
      parse: function (response) {
        return {
          snippet: $(response)
        }
      }
    });
    */
    
    var DishCollection = Backbone.Model.extend({
            
        model : DishModel
        
    });
    
    return DishCollection;
    
});