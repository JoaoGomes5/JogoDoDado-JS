var randomNumber1 =  Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNumber1 + ".png";

var imageSouce = "/images/" + randomImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src" , imageSouce);


var randomNumber2 =  Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNumber2 + ".png";

var imageSouce = "/images/" + randomImage;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src" , imageSouce);





if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =  " 🚩 Player 1 Ganhou!";
}
if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Empate";
}
if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Ganhou! 🚩";
}