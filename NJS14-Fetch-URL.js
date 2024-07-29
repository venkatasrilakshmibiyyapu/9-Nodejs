//httpRequest.js
const https= require('https');
//https://jsonplaceholder.typicode.com.todos/1     //here last 1 indicates how many records to access
https.get('https://jsonplaceholder.typicode.com/todos/',(resp)=>{
    let data='';
    //a chunk of data has been received
    resp.on('data',(chunk)=>{
        data+=chunk;
    });
    //the whole response has been received .proont out the result
    resp.on('end',()=>{
      console.log(JSON.parse(data));
      console.log(data)
    });
}).on("error",(err)=>{
    console.log("Error:"+err.message);
});