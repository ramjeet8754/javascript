

const {JSDOM}= require("jsdom");

const dom=new JSDOM(`<p id="ram"></p>`);

const document=dom.window.document;

//document.getElementById("ram").innerHTML=Math.floor(Math.random()*5);


//funcation math.random:-
function getrndinter(max,min){
    return Math.floor(Math.random() *(max-min)) + min;
}
document.getElementById("ram").innerHTML=getrndinter(1,10);

console.log(document.getElementById("ram").innerHTML);

