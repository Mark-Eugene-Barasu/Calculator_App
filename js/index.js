
let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");
let sum = 0;
let sum_el = document.getElementById("sum-el");

function add() {
    sum = Number(num1.value) + Number(num2.value);
    sum_el.innerHTML = `Sum: <span id="sum-el_val">${sum}</span>`;
}

function subtract() {
    sum = Number(num1.value) - Number(num2.value);
    sum_el.innerHTML = `Sum: <span id="sum-el_val">${sum}</span>`;
}

function divide() {
    sum = Number(num1.value) / Number(num2.value);
    sum_el.innerHTML = `Sum: <span id="sum-el_val">${sum}</span>`;
}

function multiply() {
    sum = Number(num1.value) * Number(num2.value);
    sum_el.innerHTML = `Sum: <span id="sum-el_val">${sum}</span>`;
}

