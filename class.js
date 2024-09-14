const {JSDOM}= require("jsdom");

const dom=new JSDOM(`<p id="demo"></p>`);

const document=dom.window.document;

class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

const mycar1=new Car("ford",2023);
const mycar2=new Car("Audi",2024);

document.getElementById("demo").innerHTML=mycar1.name + " " + mycar2.year;
console.log(document.getElementById("demo").innerHTML);

