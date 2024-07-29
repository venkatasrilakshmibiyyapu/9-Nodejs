//Require the http module
var http=require('http')
//require yur custom module
var dt=require('./myModule')
//Create an http server
http.createServer(function(req,res){
    //set the response header
    res.writeHead(200,{'Content-Type':'text/html'});
    //use the custom module to get date and time
    res.write("The data and time is currently:"+dt.myDateTime());
    //end the response
    res.end();
}).listen(9000);//Server listens on port 8000
// to run this program open terminal and type node NJS13-Mymodule.js
//then open google browser an type http://localhost:9000/
//finally the output is seen
