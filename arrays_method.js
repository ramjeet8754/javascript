const {JSDOM}=require("jsdom");
const dom= new JSDOM(`<p id="demo"></p>`);

const document= dom.window.document;


//arays method : length
const names=["ramjeet","anchal","aadvik","ronak"];
//let size=name.length;
//document.getElementById("demo").innerHTML=size;
//at () method:
let name=names.at(2);
document.getElementById("demo").innerHTML=name;
console.log(document.getElementById("demo").innerHTML);

