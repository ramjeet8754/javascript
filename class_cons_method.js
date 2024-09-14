const {JSDOM}= require("jsdom");

const dom=new JSDOM(`<p id="demo"></p>`);

const document=dom.window.document;

class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }


 age()
{
    const date=new Date();
    return date.getFullYear()-this.year;
}

}
const mycar=new Car("audi",2003);

document.getElementById("demo").innerHTML="my car age is " +  mycar.age() + " years old ";
console.log(document.getElementById("demo").innerHTML);

