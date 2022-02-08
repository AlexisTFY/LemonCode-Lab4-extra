// Funcciones
var priceRoom = room => {
    var priceRoom = 0;
    switch(room) {
        case "Standard":
            priceRoom = 100;
            break;
        case "Junior Suite":
            priceRoom = 120;
            break;
        case "Suite":
            priceRoom = 150;
            break;
    }
    return priceRoom;
}

var priceSpa = spa => spa ? 20 : 0;

var priceRoomOccupancy = type => {
    var percentage = 0;
    switch(type) {
        case "Normal":
            percentage = -25;
            break;
        case "Doble":
            percentage = 0;
            break;
        case "Triple":
            percentage = 25;
            break;
    }
    return percentage;
}

var priceParking = days => days * 10;

var getNigths = () => {
    var nights = document.getElementById("nights").value;
    return nights <= 0 ? 1 : nights;  
}

var dailyTotal = () => {
    var total = 0;
    var typeRoom = document.getElementById("room").value;
    var spa = document.getElementById("spa").checked;
    var RoomOccupancy = document.getElementById("type").value;
    
    total = (priceRoom(typeRoom) + priceSpa(spa)) + (((priceRoom(typeRoom) + priceSpa(spa)) * priceRoomOccupancy(RoomOccupancy)) / 100);

    return total;
}

var calculate = () => {
    var parking = document.getElementById("parking").value;
    var total = 0;
    
    total = dailyTotal() * getNigths() + priceParking(parking);

    console.log("El de la reserva es: " + total + "€");
}

document.getElementById("calculate").addEventListener("click", calculate);
document.getElementById("spa").addEventListener("input", calculate);
document.getElementById("type").addEventListener("input", calculate);
document.getElementById("room").addEventListener("input", calculate);
document.getElementById("parking").addEventListener("input", calculate);
document.getElementById("nights").addEventListener("input", calculate);