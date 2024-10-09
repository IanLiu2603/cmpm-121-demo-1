import "./style.css";

let start: number;
let prev: number;
let growthRate: number = 0;

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My amazing game hi";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = `${growthRate} chickens per second`;
app.append(header);

//Counter
let counterNum: number = 0;
const counterText = document.createElement("div");
counterText.innerHTML = `${counterNum} chickens`;
app.append(counterText);

//Button
const middleButton = document.createElement("button");
middleButton.innerHTML = "🐥";
middleButton.onclick = function buttonClick() {
  counterNum += 1;
  counterText.innerHTML = `${counterNum} chickens`;
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
    counterText.innerHTML = `${counterNum} chickens`;
    prev = timestamp;
  }
  //Enable upgrade button
  if (counterNum > 10) {
    upgradeA.disabled = false;
  }
  if (counterNum > 100) {
    upgradeB.disabled = false;
  }
  if (counterNum > 1000) {
    upgradeC.disabled = false;
  }

  requestAnimationFrame(step);
}

//Upgrade A
const upgradeA = document.createElement("button");
upgradeA.innerHTML = "Upgrade A: $10";
upgradeA.disabled = true;
let ownedA: number = 0;
upgradeA.onclick = function buyUpgrade() {
  counterNum -= 10;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += 0.1;
  ownedA += 1;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < 10) {
    upgradeA.disabled = true;
  }
  upgradeCount.innerHTML = `${ownedA} A upgrades    |     ${ownedB} B upgrades     |     ${ownedC} C upgrades`;
};
app.append(upgradeA);

//Upgrade B
const upgradeB = document.createElement("button");
upgradeB.innerHTML = "Upgrade B: $100";
upgradeB.disabled = true;
let ownedB: number = 0;
upgradeB.onclick = function buyUpgrade() {
  counterNum -= 100;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += 2;
  ownedB += 1;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < 100) {
    upgradeB.disabled = true;
  }
  upgradeCount.innerHTML = `${ownedA} A upgrades    |     ${ownedB} B upgrades     |     ${ownedC} C upgrades`;
};
app.append(upgradeB);

//Upgrade C
const upgradeC = document.createElement("button");
let ownedC: number = 0;
upgradeC.innerHTML = "Upgrade C: 1000$";
upgradeC.disabled = true;
upgradeC.onclick = function buyUpgrade() {
  counterNum -= 1000;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += 50;
  ownedC += 1;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < 1000) {
    upgradeC.disabled = true;
  }
  upgradeCount.innerHTML = `${ownedA} A upgrades    |     ${ownedB} B upgrades     |     ${ownedC} C upgrades`;
};
app.append(upgradeC);

//Upgrade Count
const upgradeCount = document.createElement("footer");
upgradeCount.innerHTML = `${ownedA} A upgrades    |     ${ownedB} B upgrades     |     ${ownedC} C upgrades`;
app.append(upgradeCount);
