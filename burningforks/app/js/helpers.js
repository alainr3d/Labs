define([
    'handlebars',
    'jquery'
],function(Handlebars,$){
    
    return {
        
        //helper
        template : function(id) {
            return Handlebars.compile($('#' + id).html());
        }
        
    }
    
});


