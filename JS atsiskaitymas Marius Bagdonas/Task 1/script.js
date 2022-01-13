/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", myCalc);
const orList = document.createElement("ol");
let lb = document.createElement("li");
let g = document.createElement("li");
let oz = document.createElement("li");

document.querySelector("#output").append(orList);
document.querySelector("ol").append(lb);
document.querySelector("ol").append(g);
document.querySelector("ol").append(oz);

function myCalc(e) {
    e.preventDefault();
    let kg = Number(document.getElementById("search").value);

    lb.textContent = kg * 2.2046 + " " + "lb";
    g.textContent = kg / 0.0010000 + " " + "g";
    oz.textContent = kg * 35.274 + " " + "oz";

    /*Style li */
    lb.style.marginLeft = "1.5rem";
    lb.style.paddingTop = "0.4rem";
    g.style.marginLeft = "1.5rem";
    g.style.paddingTop = "0.4rem";
    oz.style.marginLeft = "1.5rem";
    oz.style.paddingTop = "0.4rem";
    /*Style #output */
    const mydiv = document.querySelector("#output");
    mydiv.style.width = "14rem";
    mydiv.style.backgroundColor = "#B8860B";
    mydiv.style.height = "6rem";
    mydiv.style.margin = "30px auto";
    mydiv.style.borderRadius = "10px";
};