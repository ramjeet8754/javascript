const {JSDOM}=require("jsdom");

const dom=new JSDOM(`<p id="greets"></p>`);
const document=dom.window.document;

function myfun()
{
    const element=document.getElementById("greets");
    element.innerHTML +=  "good morning! \n";
    element.innerHTML +=  "How are you?" ;
    //document.getElementById("greets").innerHTML=
    //document.getElementById("greets").innerHTML="How are you?";

}
myfun();


//document.getElementById("greets").innerHTML="myfun";
console.log(document.getElementById("greets").innerHTML);
//console.log(document.getElementById("greets").innerHTML);