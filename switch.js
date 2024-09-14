
const {JSDOM}=require("jsdom");

const dom=new JSDOM(`<p id="demo"></p>`);

const document=dom.window.document;

switch(new Date().getDay()){
    case 0:
        day="sunday";
        break;
    case 1:
        day="Monday";
        break;

    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;

    case 4:
        day="thursday";
        break;
    case 5:
        day="friday";
        break;
    case 6:
        day="saturday";
        break;   
    default:
        day="nothing";                            
}
document.getElementById("demo").innerHTML=" today date is " + day;
console.log(document.getElementById("demo").innerHTML);
