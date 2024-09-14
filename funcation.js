
const {JSDOM} =require("jsdom");

const dom=new JSDOM(`<p id="demo"></p>`);

const document=dom.window.document;

function my_fun(p1,p2){
    p3=p1*p2;
 return p3;   
}

let results=my_fun(3,4);

document.getElementById("demo").innerHTML=results;

console.log(document.getElementById("demo").innerHTML);