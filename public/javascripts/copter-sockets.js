var socket = io.connect('http://localhost:3000');

gest.options.sensitivity( 85 );

var messageContainer = document.createElement('div');
messageContainer.className = 'gest-message';
document.body.appendChild(messageContainer);

var styles = {
    positioning: 'margin: 22% auto; min-width: 100px; max-width: 400px; width: 80%; padding: 15px;',
    copy: 'font: normal 35px/1.1 \"Helvetica Neue\", Helvetica, Arial, sans-serif; color: #fff; font-size: 45px; text-align: center;',
    general: 'display: block; background-color: #000; z-index: 100; border-radius: 10px;'
},
    messageContainerStyle = styles.positioning + styles.copy + styles.general;



gest.options.subscribeWithCallback(function(gesture) {
    if (gesture.direction) {
        filterCommand( gesture.direction )
    }
});
gest.start();


var sent = false;

function filterCommand ( command ){

    if( command == "Long down" ){
        command = "Down";
    }

    if( command == "Long up" ){
        command = "Up";
    }

    //commandList.push( command );
    console.log(command);
    socket.emit( command );

    // if( commandList[0] == "Left" && commandList[1] == "Right" && commandList[2] == "Left" ){
    //
    //     socket.emit( "Forward" );
    //     showMessage( "Forward" );
    //     sent = true;
    // }
    //
    // if( commandList[0] == "Right" && commandList[1] == "Left" && commandList[2] == "Right" ){
    //
    //     socket.emit( "Backward" );
    //     showMessage( "Backward" );
    //     sent = true;
    //
    // }
    //
    // if( commandList[0] == "Down" && commandList[1] == "Up" && commandList[2] == "Down" ){
    //
    //     socket.emit( "Land" );
    //     showMessage( "Land" );
    //     sent = true;
    //
    // }
    //
    // if( !sent ){
    //
    //     socket.emit( commandList[0] );
    //     showMessage( commandList[0] );
    //
    //     if( commandList.length == 3 ){
    //         commandList = [];
    //     }
    //
    // }
    //
    // if( commandList.length == 0 ){
    //
    //     sent == false;
    //
    // }
    //
    // if( commandList.length >= 3 ){
    //     console.log(commandList);
    //     commandList = [];
    // }


}


function showMessage(message) {

    messageContainer.innerHTML = '<p style=\"margin:0\">' + message + '</p>';
    messageContainer.setAttribute('style', messageContainerStyle);

    window.setTimeout(function() {
        messageContainer.setAttribute('style', 'display: none;');
    }, 3000);

}

// Move Forward = Left Right Left
// Move Backward = Right Left Right
// Land = down up down
