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

//Item structure
interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "White Eggs", cost: 10, rate: 0.1 },
  { name: "Silver Eggs", cost: 100, rate: 2 },
  { name: "Golden Eggs", cost: 1000, rate: 50 },
];

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
  if (counterNum > availableItems[0].cost) {
    upgradeA.disabled = false;
  }
  if (counterNum > availableItems[1].cost) {
    upgradeB.disabled = false;
  }
  if (counterNum > availableItems[2].cost) {
    upgradeC.disabled = false;
  }

  requestAnimationFrame(step);
}

//Upgrade A: Bronze Egg
const upgradeA = document.createElement("button");
upgradeA.innerHTML = `White Egg: $${availableItems[0].cost}`; //Purposely left hard coded for grammar to make sense
upgradeA.disabled = true;
let ownedA: number = 0;
upgradeA.onclick = function buyUpgrade() {
  counterNum -= availableItems[0].cost;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += availableItems[0].rate;
  ownedA += 1;
  availableItems[0].cost *= 1.15;
  upgradeA.innerHTML = `White Egg: $${availableItems[0].cost}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < availableItems[0].cost) {
    upgradeA.disabled = true;
  }
  upgradeCount.innerHTML = `${ownedA} ${availableItems[0].name}    |     ${ownedB} ${availableItems[1].name}    |     ${ownedC} ${availableItems[2].name}`;
};
app.append(upgradeA);

//Upgrade B
const upgradeB = document.createElement("button");
upgradeB.innerHTML = `Silver Egg: $${availableItems[1].cost}`;
upgradeB.disabled = true;
let ownedB: number = 0;
upgradeB.onclick = function buyUpgrade() {
  counterNum -= availableItems[1].cost;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += availableItems[1].rate;
  ownedB += 1;
  availableItems[1].cost *= 1.15;
  upgradeB.innerHTML = `Silver Egg: $${availableItems[1].cost}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < availableItems[1].cost) {
    upgradeB.disabled = true;
  }
  upgradeCount.innerHTML = `${ownedA} ${availableItems[0].name}    |     ${ownedB} ${availableItems[1].name}    |     ${ownedC} ${availableItems[2].name}`;
};
app.append(upgradeB);

//Upgrade C
const upgradeC = document.createElement("button");
let ownedC: number = 0;
upgradeC.innerHTML = `Golden Egg: $${availableItems[2].cost}`;
upgradeC.disabled = true;
upgradeC.onclick = function buyUpgrade() {
  counterNum -= availableItems[2].cost;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += availableItems[2].rate;
  ownedC += 1;
  availableItems[2].cost *= 1.15;
  upgradeC.innerHTML = `Golden Egg: $${availableItems[2].cost}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < availableItems[2].cost) {
    upgradeC.disabled = true;
  }
  upgradeCount.innerHTML = `${ownedA} ${availableItems[0].name}    |     ${ownedB} ${availableItems[1].name}    |     ${ownedC} ${availableItems[2].name}`;
};
app.append(upgradeC);

//Upgrade Count
const upgradeCount = document.createElement("footer");
upgradeCount.innerHTML = `${ownedA} ${availableItems[0].name}    |     ${ownedB} ${availableItems[1].name}    |     ${ownedC} ${availableItems[2].name}`;
app.append(upgradeCount);
