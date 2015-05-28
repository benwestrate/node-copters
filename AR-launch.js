var arDrone = require('ar-drone');
var client = arDrone.createClient();
client.config({
  'control:altitude_max': 1000
});

client.takeoff();

client.after(2000, function() {
    this.up(.2);
  });
client.after(2500, function(){
  this.stop();
})
client.after(3000, function(){
  this.down(.2);
})
client.after(4000, function(){
  /*this.left(.2);
  this.stop();
  this.animate('flipLeft', 1000);
  this.stop();*/
  this.land();
});
/*client.after(5500, function(){
  this.stop();
});
*/
client.after(6000, function(){
  this.takeoff();
})

  /*client.after(4000, function(){
    this.animate('flipLeft', 1000);
    this.stop();
    this.land()
  });*/

  /*client.after(6500, function(){
    this.animate('flipRight', 1000);
    this.stop();
  });

  client.after(8500, function(){
    this.animate('flipAhead', 1000);
    this.stop();
  });

  client.after(15000, function(){
    this.animate('flipBehind', 1000);
    this.stop();
    this.land();
  });

client.after(5000, function(){
  this.land();
});*/
