const fs=require("fs")
const bioData={
    name:"Rajesh",
    age:24,
    skill:"NodeJs Programmer"
}
console.log(bioData);
const jsonData=JSON.stringify(bioData);
fs.writeFile("testjson.json",jsonData,(err)=>{
    console.log("process completed")
})
fs.readFile("testjson.json","utf-8",(err,data)=>{
    console.log(data);
})