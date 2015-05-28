var arDrone = require('ar-drone');

var client = arDrone.createClient();

client.config({
  'control:altitude_max': 1000
});
var stop = function() {
  client.after(1000, function() {
    this.stop();
  });
};


module.exports = function(socket) {

  socket.on("Right", function(data) {
    client.right(.1);
    stop();
    console.log("Right");

  })
  socket.on("Left", function(data) {
    client.left(.1);
    stop();
    console.log("Left");

  })
  socket.on("TakeOff", function(data) {
    client.takeoff();
    stop();
    console.log("taking off now");

  })
  socket.on("Down", function(data) {
    client.land();
    stop();

    console.log("Down");

  })
  socket.on("Forward", function(data) {
    client.front(.1);
    stop();
    console.log("Long up");

  })
  socket.on("Backward", function(data) {
    client.clockwise(.5);
    stop();
    console.log("Up");

  })

}
