//helper
var template = function(id) {
    return Handlebars.compile($('#' + id).html());
}