var flight = document.getElementById("flight");
var hotel = document.getElementById("hotel");
var rental = document.getElementById("rental");

plane.onmouseover =function() {
    plane.style.backgroundColor = "lightgray";
}

bed.onmouseover =function() {
    bed.style.backgroundColor = "lightgray";
}

car.onmouseover =function() {
    car.style.backgroundColor = "lightgray";
}



plane.onmouseout =function() {
    if(flight.style.display == "block") {
    plane.style.backgroundColor = "#f44336";
    } else {
        plane.style.backgroundColor = "black";
    }
}

bed.onmouseout =function() {
    if(hotel.style.display == "block") {
    bed.style.backgroundColor = "#f44336";
    } else {
        bed.style.backgroundColor = "black";
    }
}

car.onmouseout =function() {
    if(rental.style.display == "block") {
    car.style.backgroundColor = "#f44336";
    } else {
        car.style.backgroundColor = "black";
    }
}



plane.onclick = function() {
    flight.style.display = "block";
    rental.style.display = "none";
    hotel.style.display = "none";

    bed.style.backgroundColor = "black";
    plane.style.backgroundColor = "#f44336";
    car.style.backgroundColor = "black";
}

bed.onclick = function() {
    flight.style.display = "none";
    rental.style.display = "none";
    hotel.style.display = "block";

    bed.style.backgroundColor = "#f44336";
    plane.style.backgroundColor = "black";
    car.style.backgroundColor = "black";
}

car.onclick = function() {
    flight.style.display = "none";
    rental.style.display = "block";
    hotel.style.display = "none";
    
    bed.style.backgroundColor = "black";
    plane.style.backgroundColor = "black";
    car.style.backgroundColor = "#f44336";
}