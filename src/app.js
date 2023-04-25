/* eslint-disable */
import "bootstrap";
import "./style.css";

/*import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

function getRandomInt() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

window.onload = function() {
  //write your code here//
  /*console.log("Hello Rigo from the console!");*/
  let arrayWho = ["The dog", "My granma", "His turtle", "My bird"];
  let arrayWhat = ["eat", "pissed", "crushed", "broked"];
  let arrayAvoid = ["my homework", "my T_shirt", "my meal", "my shoes"];
  let arrayWhen = [
    "before the class",
    "during my lunch",
    "while I was praying",
    "after dinner"
  ];

  let randWho = getRandomInt();
  let randwhat = getRandomInt();
  let randAvoid = getRandomInt();
  let randWhen = getRandomInt();

  let theNewExcuse =
    arrayWho[randWho] +
    " " +
    arrayWhat[randwhat] +
    " " +
    arrayAvoid[randAvoid] +
    " " +
    arrayWhen[randWhen];

  var element = document.getElementById("excuse");

  element.innerText = theNewExcuse;

  return theNewExcuse;
};
