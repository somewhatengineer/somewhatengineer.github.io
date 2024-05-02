var temp1 = Math.random()*6;
var randomNumber1 = Math.floor(temp1) + 1;
document.querySelector(".img1").setAttribute("src", "./dice" + randomNumber1 + ".png");

var temp2 = Math.random()*6;
var randomNumber2 = Math.floor(temp2) + 1;
document.querySelector(".img2").setAttribute("src", "./dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Mohit Wins 🚩";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Ashutosh Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw 🚩-🚩";
}