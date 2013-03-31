window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);

/*var allDrivers = new DriverCollection([
    {pos:1,name:'Jimmy Johnson',number:12,laps:123,speed:143,time:34,behind:'Leader',led:12,MFG:'Chevrolet'},
    {pos:2,name:'Kyle Bush',number:8,laps:453,speed:453,time:36,behind:1,led:12,MFG:'Chevrolet'},
    {pos:3,name:'Clint Bowyer',number:8,laps:453,speed:453,time:36,behind:1,led:12,MFG:'Chevrolet'},
    {pos:4,name:'Greg Biffle',number:8,laps:453,speed:453,time:36,behind:1,led:12,MFG:'Chevrolet'},
    {pos:5,name:'Martin Truex',number:8,laps:453,speed:453,time:36,behind:1,led:12,MFG:'Chevrolet'},
    {pos:6,name:'Kevin Harvick',number:8,laps:453,speed:453,time:36,behind:1,led:12,MFG:'Chevrolet'},
    {pos:7,name:'Paul Menard',number:8,laps:453,speed:453,time:36,behind:1,led:12,MFG:'Chevrolet'},
    {pos:8,name:'Carl Edwards',number:8,laps:453,speed:453,time:36,behind:1,led:12,MFG:'Chevrolet'},
    {pos:9,name:'Joey Logano',number:8,laps:453,speed:453,time:36,behind:1,led:12,MFG:'Chevrolet'}
]);*/

var allDrivers = new DriverCollection();

allDrivers.fetch({

    success : function(resp){
        
        var lbView = new LeaderboardView({
            collection: resp
        });
        
        $('#leaderboard').append(lbView.render().el);
        
    }
    
});



/*
(function(allDrivers){

setTimeout(function() {
  allDrivers.at(0).set({name : "changed"});
},
5000); 

})(allDrivers);
*/