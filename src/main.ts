import "./style.css";

let start: number;
let prev: number;
let growthRate: number = 0;

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My amazing game hi";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

//Counter
let counterNum: number = 0;
const counterText = document.createElement("div");
counterText.innerHTML = `${counterNum} chicks`;
app.append(counterText);

//Button
const middleButton = document.createElement("button");
middleButton.innerHTML = "🐥";
middleButton.onclick = function buttonClick() {
  counterNum += 1;
  counterText.innerHTML = `${counterNum} chicks`;
};
app.append(middleButton);

//Auto Clicker
requestAnimationFrame(step);
function step(timestamp: number) {
  if (start === undefined) {
    start = timestamp;
    prev = timestamp;
  } else {
    const timeGap = timestamp - prev;
    counterNum += (timeGap / 1000) * growthRate;
    counterText.innerHTML = `${counterNum} chicks`;
    prev = timestamp;
  }
  //Enable upgrade button
  if (counterNum > 10) {
    upgradeButton.disabled = false;
  }
  if (counterNum > 100) {
    multiUpgrade.disabled = false;
  }

  requestAnimationFrame(step);
}

//Upgrades
const upgradeButton = document.createElement("button");
upgradeButton.innerHTML = "Buy Auto Clicker";
upgradeButton.disabled = true;
upgradeButton.onclick = function buyUpgrade() {
  counterNum -= 10;
  counterText.innerHTML = `${counterNum} chicks`;
  growthRate += 1;
  if (counterNum < 10) {
    upgradeButton.disabled = true;
  }
};
app.append(upgradeButton);

//10x upgrade
const multiUpgrade = document.createElement("button");
multiUpgrade.innerHTML = "Buy 10 Auto Clickers";
multiUpgrade.disabled = true;
multiUpgrade.onclick = function buyUpgrade() {
  counterNum -= 100;
  counterText.innerHTML = `${counterNum} chicks`;
  growthRate += 10;
  if (counterNum < 100) {
    multiUpgrade.disabled = true;
  }
};
app.append(multiUpgrade);
