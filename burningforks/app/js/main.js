require.config({
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    handlebars: 'libs/handlebars'
  },
  shim: {
        "underscore": {
            deps: [],
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        "handlebars": {
            deps: [],
            exports: "Handlebars"
        }
    } 
});

require(['views/app'],function(AppView){
    new AppView;
}); 