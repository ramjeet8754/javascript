

const {JSDOM}= require("jsdom");

const dom=new JSDOM(`<p id="demo"></p>`);

const document=dom.window.document;
//method used
 const time= new Date().getHours();

 let greeting;

 if(time<10){
    greeting="good morning";

}
else if(time < 20){
    greeting="good afternon";
}
else{
    greeting="good evening";
}
    document.getElementById("demo").innerHTML=greeting;





console.log(document.getElementById("demo").innerHTML);