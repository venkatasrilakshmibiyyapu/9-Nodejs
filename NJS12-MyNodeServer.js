const http=require("http");
const server = http.createServer((req,res)=>{
    res.end("hello from server side: RAm");
})
 server.listen(9005,"127.0.0.1",()=>{
    console.log("listening on port 9005:RAM")
 })
 //type this in terminal
 // npm install  -g nodemon
 // nodemon NJS12-MyNodeServer.js
//output:
// Listening on Port 9000: RAM
