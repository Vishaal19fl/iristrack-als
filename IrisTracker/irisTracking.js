window.saveDataAcrossSessions = true;

const LOOK_DELAY = 1000; 
const LEFT_CUTOFF = window.innerWidth / 2; 
const RIGHT_CUTOFF = window.innerWidth;

let startLookTime = Number.POSITIVE_INFINITY;
let leftText = document.getElementById("leftText");
let rightText = document.getElementById("rightText");  
let lookDirection = null;
let leftSide = document.querySelector(".left-side");
let rightSide = document.querySelector(".right-side");

webgazer
  .setGazeListener((data, timestamp) => {
    if (data == null) return;

    if (data.x < LEFT_CUTOFF) {
      
      leftSide.style.backgroundColor = "blue";
      rightSide.style.backgroundColor = "";
      leftText.style.fontSize = "74px";
      leftText.textContent = "Left Side Selected";
      rightText.style.fontSize = "24px";
      rightText.textContent = "Right";
      
    } else {
      
      rightSide.style.backgroundColor = "green";
      leftSide.style.backgroundColor = "";
      rightText.style.fontSize = "74px";
      rightText.textContent = "Right side selected";
      leftText.textContent = "Left";
      leftText.style.fontSize = "24px";
    }
  })
  .begin();

webgazer.showVideoPreview(false).showPredictionPoints(false);

function resetBackgroundColor() {
  leftSide.style.backgroundColor = "";
  rightSide.style.backgroundColor = "";
}

setInterval(resetBackgroundColor, 500); 
