function openDrinkMenu() {
    var drink = document.getElementById('drink');
    var eat = document.getElementById('eat');
    var menuEat = document.getElementById('menu_eat');
    var menuDrink = document.getElementById('menu_drink');

    drink.style.display = 'block';
    eat.style.display = 'none';

    menuDrink.style.backgroundColor = 'rgb(85, 85, 85)';
    menuDrink.style.color= 'white';
    menuEat.style.backgroundColor = 'transparent';
    menuEat.style.color= 'black';
}

function openEatMenu() {
    var drink = document.getElementById('drink');
    var eat = document.getElementById('eat');
    var menuEat = document.getElementById('menu_eat');
    var menuDrink = document.getElementById('menu_drink');

    drink.style.display = 'none';
    eat.style.display = 'block';

    menuEat.style.backgroundColor = 'rgb(85, 85, 85)';
    menuEat.style.color= 'white';
    menuDrink.style.backgroundColor = 'transparent';
    menuDrink.style.color= 'black';
}