//import jsdom moudle 
const {JSDOM}=require("jsdom");

//
const dom=new JSDOM(`<p id="demo"></p>`);

const document= dom.window.document;

//crate a object 
//let car = "fiat";



//document.getElementById("demo").innerHTML="Cars:" + car;

//console.log(document.getElementById("demo").innerHTML);

//crate a object with multiple values:
//let cars= {type :"fiat",model:"bs6",color:"white"};
//document.getElementById("demo").innerHTML="Cars:" + cars.type;


//carate obj
//const person ={firstname: "ramjeet", lastname: "kuamr", age:28, eyecolor: "blue" }

//like that obj also crate:
const person={};
//now add properites:
person.firstname= "ramjeet";
person.lastname="kuamr";
person.age=28; 
person.eyecolor= "blue";

document.getElementById("demo").innerHTML= person.firstname +  " is " +  person.age  + " years old.";

console.log(document.getElementById("demo").innerHTML);