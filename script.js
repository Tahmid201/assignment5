//  Heart Button Functionality
let heartCount = 0;
const heartCounter = document.getElementById("heart-count");
const heartClick = document.getElementsByClassName("heart");

for (let i = 0; i < heartClick.length; i++) {
  heartClick[i].onclick = function () {
    heartCount++;
    heartCounter.innerText = heartCount;
  };
}