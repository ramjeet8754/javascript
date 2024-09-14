
const {JSDOM}=require("jsdom");

const dom=new JSDOM(`<p id="demo"></p>`);

const document= dom.window.document;

//create constructor funcation for  obj person
function person(first, last, age, sex){
    this.firstname=first;
    this.lastname=last;
    this.age=age;
    this.sex=sex;
}

//creat two person  obj
const myfather=new person("ram","jeet",28,"male");
const mymother=new person("anchal","bala",27,"female");

//display property
document.getElementById("demo").innerHTML=
" my father is " + myfather.firstname  + " and " +  " my mother " + mymother.lastname ;
console.log(document.getElementById("demo").innerHTML);