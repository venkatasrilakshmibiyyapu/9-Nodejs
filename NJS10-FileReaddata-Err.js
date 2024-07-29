const fs=require('fs')
fs.readFile('myramdata1.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});