var socket = io.connect('http://localhost:3000');

gest.options.sensitivity( 85 );


gest.options.subscribeWithCallback(function(gesture) {
    if (gesture.direction) {
        filterCommand( gesture.direction )
    }
});
gest.start();

var commandList = [];
var sent = false;

function filterCommand ( command ){

    if( command == "Long down" ){
        command = "Down";
    }

    if( command == "Long up" ){
        command = "Up";
    }

    commandList.push( command );

    if( commandList[commandList.length - 1] == "Left" && commandList[commandList.length - 2] == "Right" && commandList[commandList.length - 3] == "Left" ){

        socket.emit( "Forward" );
        showMessage( "Forward" );
        sent = true;
    }

    if( commandList[commandList.length - 1] == "Right" && commandList[commandList.length - 2] == "Left" && commandList[commandList.length - 3] == "Right" ){

        socket.emit( "Backward" );
        showMessage( "Backward" );
        sent = true;

    }

    if( commandList[commandList.length - 1] == "Down" && commandList[commandList.length - 2] == "Up" && commandList[commandList.length - 3] == "Down" ){

        socket.emit( "TakeOff" );
        showMessage( "TakeOff" );
        sent = true;

    }


    if( !sent ){

        socket.emit( command );
        showMessage( command );

    } else {

        sent = false;

    }


}

var messageContainer = document.createElement('div');
messageContainer.className = 'gest-message';
document.body.appendChild(messageContainer);

var styles = {
    positioning: 'margin: 22% auto; min-width: 100px; max-width: 400px; width: 80%; padding: 15px;',
    copy: 'font: normal 35px/1.1 \"Helvetica Neue\", Helvetica, Arial, sans-serif; color: #fff; font-size: 45px; text-align: center;',
    general: 'display: block; background-color: #000; z-index: 100; border-radius: 10px;'
},
    messageContainerStyle = styles.positioning + styles.copy + styles.general;

function showMessage(message) {



    messageContainer.innerHTML = '<p style=\"margin:0\">' + message + '</p>';
    messageContainer.setAttribute('style', messageContainerStyle);

    window.setTimeout(function() {
        messageContainer.setAttribute('style', 'display: none;');
    }, 3000);

}

var landButton = document.querySelector(".kill");

landButton.addEventListener( "click", function(e){ socket.emit( "Down" ); socket.emit( "Down" ); socket.emit( "Down" ); } )

// Move Forward = Left Right Left
// Move Backward = Right Left Right
// Land = down up down
