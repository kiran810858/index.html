var randomNumber1 = Math.random() * 6;
var randomNumber1 = Math.floor(randomNumber1) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var imgSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgSource);

var randomNumber2 = Math.random() * 6;
var randomNumber2 = Math.floor(randomNumber2) + 1;
var randomDiceImage="images/dice" +randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Kiran wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Varun wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}