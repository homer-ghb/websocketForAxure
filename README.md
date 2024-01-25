# Webscocket client plugin for Axure Demo
## Usage
With this plugin you can use Websocket communication between your Axure demo and Websocket server , e.g.:
 - Communication between two Axure demo
 - Communication between Axure demo and other prototype, such as Ardunio, Protopie

## How to use
### Embed wsForAxure into your Axure html file
#### 1.Copy wsForAxure.js into the folder that you export Axure demo
#### 2.insert <script src="wsForAxure.js"></script> into the html file that you want to use websocket communication
<img width="582" alt="截屏2024-01-25 11 03 35" src="https://github.com/homer-ghb/websocketForAxure/assets/152468039/dd2a744b-75e4-4821-b592-945e4f42ee9c">


## How to send websocket message in Axure demo
### Use action "Open Link" to call javascript function to send message
"javascript:sendContent("Your message goes here") 

<img width="424" alt="截屏2024-01-25 11 14 49" src="https://github.com/homer-ghb/websocketForAxure/assets/152468039/9cae71d7-0937-4447-a412-845f4315a729">

## How to handle message from server to Axure Demo
Modify the **messageReceived** funtion in the wsForAxure for handle the message from server as you like, such as set the message as value of a Axure Global variable
```
    function messageReceived(evt) {
        //Handle your message here
        var received_msg = evt; 
        //e.g: pass the msg to Axure global variable "AxureVariable"
        $axure.setGlobalVariable("AxureVariable", received_msg);
        console.log(received_msg);
    }
```
You can use following code to pass value to variables in your Axure demo
**$axure.setGlobalVariable("AxureVariableName", #ValueToSet#)
