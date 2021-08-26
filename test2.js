const mm = require('music-metadata');
const fs = require('fs');
var end;
var List=[];


        console.log("ㅁㄴㅇㄴㅁㅇ");
        fs.readdir("./music1",(err,list) => {
            if(err) console.log(err);

    for(var i=0;i<list.length;i++){
        List[i]=list[i];
        console.log(List[i]);
    }
    end=list.length;
    console.log(end);
});


(async () => {
    try {
        
      
      
        console.log("ㅌㅋㅍㅌㅋ");
       console.log(end);
           for(var i=0 ; i<end;i++){
            metadata = await mm.parseFile("./music1/"+List[i]);
            console.log("제목"+metadata.common.title);
            console.log("아티스트"+metadata.common.artist);
            if(metadata.common.title == null) console.log("타이틀널");
            if(metadata.common.artist == null) console.log("아티스트널");
        
           }

           console.log("기록 끝 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
        

            

           

           
        

   
       
    } catch (error){
        console.log(error);
    }
})();




