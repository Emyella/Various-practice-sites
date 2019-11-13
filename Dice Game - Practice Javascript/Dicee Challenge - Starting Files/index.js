/* This creates a random number between 0-0.99999 and multiplies by 6.
It then adds 1, so that the number can go above 6, and then 'floors' which reduces the
number to between 1 and 6. */

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

/*This line of code creates an array, using all the different dice images.
This array is then used, to denote which image is going to be shown, based off the random number.
It changes the 'img1' class source to the variable 'diceImages' array and then asks the number
of which array to be shown based off the number. As arrays start at 0, we modify the randomNumber1 variable,
taking away - 1, so that the number given is now between 0 and 5, the total number of objects in the array.    */

var diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
document.querySelector ("div .img1").setAttribute("src", diceImages[randomNumber1 - 1]);

/* I then create a 2nd random number generator, and apply that to the same array, but using the second dice image.
This lets me have different random dice shown on both images. */

document.querySelector ("div .img2").setAttribute("src", diceImages[randomNumber2 - 1]);

/* Created a function called 'diceGame'. Inside this function I called both the random number variables.
They then get matched against each other, and using 'innerHTML', change the text based off which dice is higher. */

diceGame();

function diceGame() {
  if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
  else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 It's a Draw! 🚩";
}
}

// ______________________________________________________________________
/*Angelas way, with easy follow along:

var randomNumber1 = Math.floor(Math.random() * 6) + 1; -- 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; -- dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; -- images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; -- calls all 'img', but changes only the first in the array to 'var image1'

image1.setAttribute("src", randomImageSource); -- changes the src of the image1 to the randomImageSource

___________   ____________  __________ ____________ _______ ________ ________

var randomNumber2 = Math.floor(Math.random() *  6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

______ _______ ________________________ ______________________________________________________________________

if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else {
document.querySelector("h1").innerHTML = "🚩 Its a Draw! 🚩"
}

_________________________________________________________________________
/* a More complicated version of doing this, with 2 functions and 'for' variable loops is:
var randomNumber1;
var randomNumber2;
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var winner = document.querySelector("h1");

This creates variables that can be easily called upon by the functions. Also, only calls 1 tag in the querySelector.

refresh();

Calls the function.

function refresh() {
  randomNumber1 = randomize(randomNumber1, dice1);
  randomNumber2 = randomize(randomNumber2, dice2);
  if (randomNumber1 > randomNumber2) {
    winner.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    winner.textContent = "Player 2 Wins! 🚩";
  } else {
    winner.textContent = "Draw!";
  }
}

function randomize(randomNumber, dice) {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  for (var i = 1; i <= 6; i++) {
    var imgLink;
    if (randomNumber === i) {
      imgLink = "images/dice" + i + ".png";
      dice.setAttribute("src", imgLink);
    }
  }
  return randomNumber;
}
*/
