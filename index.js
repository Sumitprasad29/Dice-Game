var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random no. from 1-6

var randonDiceImage = "dice" + randomNumber1 + ".png"; // dice image no. from 1 - 6

var randomImageSelect = "images/" + randonDiceImage; // random dice images from images /

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSelect);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // random no. from 1-6

var randomImageSelect2 = "images/dice" + randomNumber2 + ".png";  // random dice images no. from images /

document.querySelectorAll("img")[1].setAttribute("src", randomImageSelect2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}