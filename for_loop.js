const {JSDOM}=require("jsdom");

const dom=new JSDOM(`<p id="demo"></p>`);
const document=dom.window.document;


const fruits=["apple","mango","guvava","orange","lichi"];

let sweet="";

for (let i=0;i<fruits.length;i++){
    sweet  += fruits[i]+ "\n";
}
document.getElementById("demo").innerHTML=sweet;


let i=5;
for(i=0;i<10;i++){
    
}
document.getElementById("demo").innerHTML=i;
console.log(document.getElementById("demo").innerHTML);


