
const {JSDOM}=require("jsdom");

const dom=new JSDOM(`<p id="demo"></p>`);

const document=dom.window.document;

const cars=["volva","honda","maruthi"];

document.getElementById("demo").innerHTML=cars;

//asscessing arrays
document.getElementById("demo").innerHTML=cars[2];

//chanage arrays
cars[1]="kiwi";
document.getElementById("demo").innerHTML=cars;

//arary to string

//const cars=["volva","honda","maruthi"];
document.getElementById("demo").innerHTML=cars.toString();

console.log(document.getElementById("demo").innerHTML);