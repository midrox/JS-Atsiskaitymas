/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.sum = function(a, b) {
        return a + b;
    };
    this.subtraction = function(a, b) {
        return a - b;
    };
    this.multiplication = function(a, b) {
        return a * b;
    };
    this.division = function(a, b) {
        return a / b;
    };
};
let calc = new Calculator;
console.log(calc.multiplication(3, 5));