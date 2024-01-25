//Websocket plugin for Axure
// --> https://github.com/homer-ghb/websocketForAxure //
//v0.1.0

// Your websocket server address. Replace "ws://127.0.0.1:13254" with your own address
var ws = new WebSocket("ws://127.0.0.1:13254"); 

// Actions when axure demo connected to server
ws.onopen = function () { sendContent("web client"); }; 

// Actions when axure demo received message from server
ws.onmessage = function (evt) { messageReceived(evt.data); };


//Send value of Axure global variable to server
function sendAxVal(val) {
    $axure.internal(function ($ax) {
        $ax.public.getGlobalVariable = $ax.getGlobalVariable = function (name) {
            return $ax.globalVariableProvider.getVariableValue(name);
        };
    });
    var value = $axure.getGlobalVariable("val");
    sendContent(value);
}


//Deal with message received from server (Simple string , not JSON)
function messageReceived(evt) {
    //Handle your message here
    var received_msg = evt; 
    //e.g: pass the msg to Axure global variable "AxureVariable"
    $axure.setGlobalVariable("AxureVariable", received_msg);
    
    console.log(received_msg);
}

////Deal with JSON format message received from server
function messageReceivedJSON(evt) {
    var received_msg = evt; 
    // format message string to JSON object
    var tempValueJSON = JSON.parse(received_msg);
    console.log(received_msg);
    
    // pass value of a key to Axure global variable 
    $axure.setGlobalVariable("TempLS", tempValueJSON.exampleKey);
    

}