/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const output = document.getElementById("output");

function myfun(e) {
    e.preventDefault();
    fetch("/cars.json")
        .then(res => res.json())
        .then(data => {
            data.forEach((item, index) => {
                output += `<p>${item.brand} ${item.models}</p>`
            });
            document.querySelector("#output").innerHTML = output;
        })
    output.style.backgroundColor = "lightblue";
    output.style.borderRadius = "30px";
};
/*pasiduodu... :D */