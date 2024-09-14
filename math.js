
const {JSDOM}=require("jsdom");

const dom= new JSDOM(`<p id="demo"></p>`);

const document= dom.window.document;
//math.pi
document.getElementById("demo").innerHTML=Math.PI;

//math.min
document.getElementById("demo").innerHTML=Math.min(100,3,2,4,22,44);

//math.max
document.getElementById("demo").innerHTML=Math.max(100,3,2,4,22,44);

//math.random
document.getElementById("demo").innerHTML=Math.random(1 ,10);


console.log(document.getElementById("demo").innerHTML);