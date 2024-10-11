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

//Update Functions
function updateCounter() {
  upgradeCount.innerHTML = `${ownedA} ${availableItems[0].name}    
  |     ${ownedB} ${availableItems[1].name}    
  |     ${ownedC} ${availableItems[2].name}
  |     ${ownedD} ${availableItems[3].name}
  |     ${ownedE} ${availableItems[4].name}`;
}

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
  { name: "Mystical Eggs", cost: 10000, rate: 200 },
  { name: "Galactic Eggs", cost: 100000, rate: 4000 },
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
  if (counterNum > availableItems[3].cost) {
    upgradeD.disabled = false;
  }
  if (counterNum > availableItems[4].cost) {
    upgradeE.disabled = false;
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
  updateCounter();
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
  updateCounter();
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
  updateCounter();
};
app.append(upgradeC);

//Upgrade D
const upgradeD = document.createElement("button");
let ownedD: number = 0;
upgradeD.innerHTML = `Mystical Egg: $${availableItems[3].cost}`;
upgradeD.disabled = true;
upgradeD.onclick = function buyUpgrade() {
  counterNum -= availableItems[3].cost;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += availableItems[3].rate;
  ownedD += 1;
  availableItems[3].cost *= 1.15;
  upgradeD.innerHTML = `Mystical Egg: $${availableItems[3].cost}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < availableItems[3].cost) {
    upgradeD.disabled = true;
  }
  updateCounter();
};
app.append(upgradeD);

//Upgrade E
const upgradeE = document.createElement("button");
let ownedE: number = 0;
upgradeE.innerHTML = `Galactic Egg: $${availableItems[4].cost}`;
upgradeE.disabled = true;
upgradeE.onclick = function buyUpgrade() {
  counterNum -= availableItems[4].cost;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += availableItems[4].rate;
  ownedE += 1;
  availableItems[4].cost *= 1.15;
  upgradeE.innerHTML = `Galactic Egg: $${availableItems[4].cost}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < availableItems[4].cost) {
    upgradeE.disabled = true;
  }
  updateCounter();
};
app.append(upgradeE);

//Upgrade Count
const upgradeCount = document.createElement("footer");
updateCounter();
app.append(upgradeCount);

//Descriptions button
const descriptionButton = document.createElement("button");
const descriptionText = document.createElement("div");

descriptionText.style.textAlign = "left";
descriptionText.innerHTML = `White Eggs: <br>
Fresh from the coop, these simple eggs provide a slow but reliable source of chickens, producing 1 chicken every 10 seconds.<br><br>

Silver Eggs<br>
Crafted by the finest artisans, these luxurious silver eggs grant you 2 clicks per second, rapidly boosting your production and ensuring your chicken farm flourishes!<br>
<br>
Golden Eggs<br>
A rare find! These glittering golden eggs produce 50 chickens per second.<br>
<br>
Mystical Eggs<br>
Ancient and shrouded in enchantment, these mystical eggs possess the wisdom of ancient civilizations, providing an 200 chickens each second.
<br><br>
Galactic Eggs<br>
Harvested from distant stars, these galactic eggs are not meant to be housed on a small planet such as Earth! They are able to feed civilizations by themselves by producing 4000 chickens every second.`;

descriptionText.style.visibility = "hidden";
descriptionButton.innerHTML = "Upgrade Details";
let descript: boolean = false;
descriptionButton.onclick = function toggleDescriptions() {
  if (descript) {
    descriptionText.style.visibility = "hidden";
  } else {
    descriptionText.style.visibility = "visible";
    descript = true;
  }
};
app.append(descriptionButton);
app.append(descriptionText);
