
//import jsdom
const {JSDOM}=require("jsdom");

//create new instance jsdom to represendting with html arguments
const dom=new JSDOM(`<p id="demo"></p`);

const document= dom.window.document;


let a,b,c;
a=30;
b=33;
c=a+b;
document.getElementById("demo").innerHTML =c;

console.log(document.getElementById("demo").innerHTML);