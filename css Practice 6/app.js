var salads = document.getElementById("salads");
var pizza = document.getElementById("pizza");
var starter = document.getElementById("starter");

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

function openSalads() {
    pizza.style.display = 'none';
    starter.style.display = 'none';
    salads.style.display = 'block';
    second.style.backgroundColor = 'red';
    first.style.backgroundColor = 'black';
    third.style.backgroundColor = 'black';
}

function openStarter() {
    pizza.style.display = 'none';
    salads.style.display = 'none';
    starter.style.display = 'block';
    second.style.backgroundColor = 'black';
    first.style.backgroundColor = 'black';
    third.style.backgroundColor = 'red';
}

function openPizza() {
    pizza.style.display = 'block';
    starter.style.display = 'none';
    salads.style.display = 'none';
    second.style.backgroundColor = 'black';
    first.style.backgroundColor = 'red';
    third.style.backgroundColor = 'black';
}