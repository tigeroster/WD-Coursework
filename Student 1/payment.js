'use strict';

const payAmountBtn = document.querySelector('#payAmount')
const decrementBtn = document.querySelectorAll('.decrement')
const incrementBtn = document.querySelectorAll('.increment')
const priceElem = document.querySelectorAll('.price')
const subtotalElem = document.querySelector('#subtotal')
const totalElem = document.querySelector('#total')
const quantityElem = document.querySelector('.quantity')

for(let i = 0; i<incrementBtn.length; i++){
    incrementBtn[i].addEventListener('click', function() {
        let increment = Number(this.previousElementSibling.textContent);

        this.previousElementSibling.textContent = increment;

        totalCalc()
    });

    decrementBtn[i].addEventListener('click', function() {
        let decrement = Number(this.nextElementSibling.textContent);

        decrement <= 1 ? 1: decrement--;

        this.nextElementSibling.textContent = decrement;

        totalCalc()
    })
}

const totalCalc = function() {
    const subtotal = 0;
    const shipping = 0.10;
    let total = 0;


    for(let i = 0; i<quantityElem.length; i++){
        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent)
    }

    subtotalElem.textContent = subtotal.toFixed(2);

    total = subtotal + shipping;

    totalElem.textContent = total.toFixed(2);
    payAmountBtn.textContent = total.toFixed(2);
}