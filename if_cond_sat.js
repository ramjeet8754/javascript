

const {JSDOM}= require("jsdom");

const dom=new JSDOM(`<p id="demo"></p>`);

const document=dom.window.document;

 a=10;
 b=50;
 if(a>b){
    document.getElementById("demo").innerHTML="a is greater then b";

}
else{
    document.getElementById("demo").innerHTML="a is not greater then b";
}



/*
if(new Date().getHours() < 18){
    document.getElementById("demo").innerHTML="good day";

}*/

console.log(document.getElementById("demo").innerHTML);