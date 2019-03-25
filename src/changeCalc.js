let moneyGiven = document.getElementById("moneyGiven");
let itemCost = document.getElementById("itemCost");
let changeWindow = document.getElementById("changeWindow");
function changeCalc() {
  let a = ((moneyGiven.value - itemCost.value) * 100).toFixed(2);
  let b = (a % 25).toFixed(2);
  let quartersNum = Math.ceil((a - b) / 25);
  if (b > 0) {
    var c = (b % 10).toFixed(2);
    var dimesNum = Math.ceil((b - c) / 10);
    if (c > 0) {
      var d = (c % 5).toFixed(2);
      var nicklesNum = Math.ceil((c - d) / 5);
      if (d > 0) {
        var e = (d % 1).toFixed(2);
        var penniesNum = Math.ceil((d - e) / 1);
        changeWindow.innerHTML = `${quartersNum} quarters, ${dimesNum} dimes, ${nicklesNum} nickles, ${penniesNum} pennies`;
      } else {
        changeWindow.innerHTML = `${quartersNum} quarters, ${dimesNum} dimes, ${nicklesNum} nickles`;
      }
    } else {
      changeWindow.innerHTML = `${quartersNum} quarters, ${dimesNum} dimes`;
    }
  } else {
    changeWindow.innerHTML = `${quartersNum} quarters`;
  }
  console.log(a);
}

let calcBtn = document.getElementById("calcBtn");
calcBtn.addEventListener("click", changeCalc);

function clear() {
  moneyGiven.value = "";
  itemCost.value = "";
  changeWindow.innerHTML = "";
}

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clear);
