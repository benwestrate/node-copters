
var arDrone         = require('ar-drone');

var client = arDrone.createClient();

client.config({
  'control:altitude_max': 1000
});

client.takeoff();

module.exports = function( socket ){

    socket.on( "Right" , function( data ){
        client.right(.1);
        client.after(1000, function(){
          this.stop();
        });
        console.log( "Right" );

    } )
    socket.on( "Left" , function( data ){
      client.left(.1);
      client.after(1000, function(){
        this.stop();
      });
        console.log( "Left" );

    } )
    socket.on( "Take Off" , function( data ){
        client.takeoff();
        console.log( "taking off now" );

    } )
    socket.on( "Down" , function( data ){
      client.land();
      client.after(1000, function(){
        this.stop();
      });

        console.log( "Down" );

    } )
    socket.on( "Long up" , function( data ){

        console.log( "Long up" );

    } )
    socket.on( "Up" , function( data ){

        console.log( "Up" );

    } )


}
