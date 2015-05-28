



module.exports = function( socket ){

    socket.on( "Right" , function( data ){

        console.log( "Right" );

    } )
    socket.on( "Left" , function( data ){

        console.log( "Left" );

    } )
    socket.on( "Land" , function( data ){

        console.log( "Land" );

    } )
    socket.on( "Down" , function( data ){

        console.log( "Down" );

    } )
    socket.on( "Long up" , function( data ){

        console.log( "Long up" );

    } )
    socket.on( "Up" , function( data ){

        console.log( "Up" );

    } )


}
