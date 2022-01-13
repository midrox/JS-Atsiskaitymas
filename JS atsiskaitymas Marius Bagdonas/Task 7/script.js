/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
    make: 'audi',
    model: 'A6',
    year: 2005,
    color: 'white',
};

function showObjectKeys(Object) {
    let array = [];
    for (let key in Object) {
        array.push(key)
    }
    return array;
};
console.log(showObjectKeys(audi));