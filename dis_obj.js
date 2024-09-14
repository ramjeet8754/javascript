
const {JSDOM}=require("jsdom");

const dom=new JSDOM(`<p id ="demo"></p>`);

const document=dom.window.document;

//create object :

const person={
    name :"ramjeet",
    age:28,
    sex:"male"
};

//display object
document.getElementById("demo").innerHTML=person;

//diplay object property:
//document.getElementById("demo").innerHTML=person.name + ", " + person.age + "," + person.sex;

//displya obj pro in loop

let ram="";
for (let x in person){
    ram += person[x] + " "
};

document.getElementById("demo").innerHTML=ram;

console.log(document.getElementById("demo").innerHTML);