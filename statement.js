const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<p id="demo"></p>`);
const document = dom.window.document;

document.getElementById("demo").innerHTML = "Hello Dolly.";
console.log(document.getElementById("demo").innerHTML);  // "Hello Dolly."




