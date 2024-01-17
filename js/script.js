const mainField = document.getElementById("main-field");
mainField.className = "main-field";

function fieldGenerator() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.dataset.color = "0";
      tile.addEventListener("click", clicker);
      mainField.appendChild(tile);
    }
  }
}

function clicker(e) {
  // console.log("click");

  e.target.dataset.color = parseInt(e.target.dataset.color) + 1;

  const tileColorValue = parseInt(e.target.dataset.color);

  if (tileColorValue > 0 && tileColorValue < 10) {
    e.target.className = "tile t1";
  } else if (tileColorValue >= 10 && tileColorValue < 20) {
    e.target.className = "tile t2";
  } else if (tileColorValue >= 20 && tileColorValue < 30) {
    e.target.className = "tile t3";
  } else if (tileColorValue >= 30 && tileColorValue < 40) {
    e.target.className = "tile t4";
  } else if (tileColorValue >= 40 && tileColorValue < 50) {
    e.target.className = "tile t5";
  } else if (tileColorValue >= 50 && tileColorValue < 60) {
    e.target.className = "tile t6";
  } else if (tileColorValue >= 60 && tileColorValue < 70) {
    e.target.className = "tile t7";
  } else if (tileColorValue >= 70 && tileColorValue < 80) {
    e.target.className = "tile t8";
  } else if (tileColorValue >= 80 && tileColorValue < 90) {
    e.target.className = "tile t9";
  }

  //   console.log(e.target.dataset.color);
  console.log(e.target.className);
}

fieldGenerator();
