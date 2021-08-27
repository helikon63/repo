const express = require("express");
const path = require("path");
const os = require("os");
const fs = require("fs");
const id3 = require("node-id3");
const mm = require('music-metadata');
var AWS = require('aws-sdk');
var s3=new AWS.S3();
var num;
var name;
var n;
var end;
var count;
var List=[];
var metadata;
var songs = require('./songs1.js');
var len = songs.length;
var key;
var dot = require("dotenv");
dot.config();
process.env.AWS_SECRET_KEYID= "AKIAREPPFBYXNFBQWMHY"
process.env.AWS_SECRET_KEY="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"

/*AWS.config.update({
    accessKeyId: process.env.AWS_SECRET_KEYID,
    secretAccessKey:process.env.AWS_SECRET_KEY,
    region:'ap-northeast-2'


}); */
var params = {Bucket:"musicbuc",
Key: `music1/${key}`
}

app = express();
app.set("port",'2222');


       
//console.dir(List, {'maxArrayLength': null});
console.log(songs);





app.get("/music/name",(req,res,next) => 
{
   
   /* res.json({
        "songname": nlist[0] ,
        "artist" :  alist[0],
        "num" : end
    })
    */
   res.json({
       "songname" : songs[0]
   });

}
)

app.get("/music/play/:id",(req,res) => {
    const id=req.params.id;
    console.log("play요청:",id);
    // res.download("./music1/"+List[id-1]);
    //res.setHeader("Content-disposition","attachment; filename=azxc");
    //res.sendFile(__dirname+"/music1/"+List[id-1]);

    console.log(songs[id-1]);
    params.Key=`music1/${songs[id-1]}`;
    res.setHeader('Content-disposition','attachment; filename="asd"');
    s3.getObject(params).createReadStream().pipe(res);
  

})

app.get("/music/name/:id",(req,res) =>{

    const id=req.params.id;

  
   
  
        res.json({
            "songname": songs[id-1],
            "num" : len
           
        });
}
    

)

app.get("/music/play",(req,res) => {

    // res.download("./music1/"+List[0]);
    //res.setHeader("Content-disposition","attachment; filename=azxc");
   // res.sendFile(__dirname+"/music1/"+List[0]);
    console.log(songs[0]);
    params.Key=`music1/${songs[0]}`;
    res.setHeader('Content-disposition','attachment; filename="asd.mp3"');
    s3.getObject(params).createReadStream().pipe(res);
    

})

app.listen(app.get("port"),()=>{
    console.log("대기중3");
    console.log(os.type());
})


