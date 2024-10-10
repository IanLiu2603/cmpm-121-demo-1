import "./style.css";

let start: number;
let prev: number;
let growthRate: number = 0;

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Chicken Farm";
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
  if (counterNum > costA) {
    upgradeA.disabled = false;
  }
  if (counterNum > costB) {
    upgradeB.disabled = false;
  }
  if (counterNum > costC) {
    upgradeC.disabled = false;
  }

  requestAnimationFrame(step);
}

//Upgrade A: Bronze Egg
const upgradeA = document.createElement("button");
let costA: number = 10;
upgradeA.innerHTML = `Bronze Egg: $${costA}`;
upgradeA.disabled = true;
let ownedA: number = 0;
upgradeA.onclick = function buyUpgrade() {
  counterNum -= costA;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += 0.1;
  ownedA += 1;
  costA *= 1.15;
  upgradeA.innerHTML = `Bronze Egg: $${costA}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < costA) {
    upgradeA.disabled = true;
  }
  upgradeCount.innerHTML = `${ownedA} Bronze Eggs    |     ${ownedB} Silver Eggs     |     ${ownedC} Golden Eggs`;
};
app.append(upgradeA);

//Upgrade B
const upgradeB = document.createElement("button");
let costB: number = 100;
upgradeB.innerHTML = `Silver Egg: $${costB}`;
upgradeB.disabled = true;
let ownedB: number = 0;
upgradeB.onclick = function buyUpgrade() {
  counterNum -= costB;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += 2;
  ownedB += 1;
  costB *= 1.15;
  upgradeB.innerHTML = `Silver Egg: $${costB}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < costB) {
    upgradeB.disabled = true;
  }
  upgradeCount.innerHTML = `${ownedA} Bronze Eggs    |     ${ownedB} Silver Eggs     |     ${ownedC} Golden Eggs`;
};
app.append(upgradeB);

//Upgrade C
const upgradeC = document.createElement("button");
let ownedC: number = 0;
let costC: number = 1000;
upgradeC.innerHTML = `Golden Egg: $${costC}`;
upgradeC.disabled = true;
upgradeC.onclick = function buyUpgrade() {
  counterNum -= costC;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += 50;
  ownedC += 1;
  costC *= 1.15;
  upgradeC.innerHTML = `Golden Egg: $${costC}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < costC) {
    upgradeC.disabled = true;
  }
  upgradeCount.innerHTML = `${ownedA} Bronze Eggs    |     ${ownedB} Silver Eggs     |     ${ownedC} Golden Eggs`;
};
app.append(upgradeC);

//Upgrade Count
const upgradeCount = document.createElement("footer");
upgradeCount.innerHTML = `${ownedA} Bronze Eggs    |     ${ownedB} Silver Eggs     |     ${ownedC} Golden Eggs`;
app.append(upgradeCount);
