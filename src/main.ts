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
  if (counterNum > availableItems[0].cost) {
    buyWhiteEgg.disabled = false;
  }
  if (counterNum > availableItems[1].cost) {
    buySilverEgg.disabled = false;
  }
  if (counterNum > availableItems[2].cost) {
    buyGoldEgg.disabled = false;
  }
  if (counterNum > availableItems[3].cost) {
    buyMysticalEgg.disabled = false;
  }
  if (counterNum > availableItems[4].cost) {
    buyGalacticEgg.disabled = false;
  }

  requestAnimationFrame(step);
}

//Item structure
interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "White Eggs", cost: 10, rate: 0.1},
  { name: "Silver Eggs", cost: 100, rate: 2},
  { name: "Golden Eggs", cost: 1000, rate: 50},
  { name: "Mystical Eggs", cost: 10000, rate: 200 },
  { name: "Galactic Eggs", cost: 100000, rate: 4000},
];

//Update Functions
function updateCounter() {
  upgradeCount.innerHTML = `${ownedWhiteEggs} ${availableItems[0].name}    
  |     ${ownedSilverEggs} ${availableItems[1].name}    
  |     ${ownedGoldEggs} ${availableItems[2].name}
  |     ${ownedMysticEggs} ${availableItems[3].name}
  |     ${ownedGalacticEggs} ${availableItems[4].name}`;
}

//Upgrade A: White Egg
const buyWhiteEgg = document.createElement("button");
buyWhiteEgg.innerHTML = `White Egg: $${availableItems[0].cost}`; //Purposely left hard coded for grammar to make sense
buyWhiteEgg.disabled = true;
let ownedWhiteEggs: number = 0;
buyWhiteEgg.onclick = function buyUpgrade() {
  counterNum -= availableItems[0].cost;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += availableItems[0].rate;
  ownedWhiteEggs += 1;
  availableItems[0].cost *= 1.15;
  buyWhiteEgg.innerHTML = `White Egg: $${availableItems[0].cost}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < availableItems[0].cost) {
    buyWhiteEgg.disabled = true;
  }
  updateCounter();
};
app.append(buyWhiteEgg);

//Upgrade B
const buySilverEgg = document.createElement("button");
buySilverEgg.innerHTML = `Silver Egg: $${availableItems[1].cost}`;
buySilverEgg.disabled = true;
let ownedSilverEggs: number = 0;
buySilverEgg.onclick = function buyUpgrade() {
  counterNum -= availableItems[1].cost;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += availableItems[1].rate;
  ownedSilverEggs += 1;
  availableItems[1].cost *= 1.15;
  buySilverEgg.innerHTML = `Silver Egg: $${availableItems[1].cost}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < availableItems[1].cost) {
    buySilverEgg.disabled = true;
  }
  updateCounter();
};
app.append(buySilverEgg);

//Upgrade C
const buyGoldEgg = document.createElement("button");
let ownedGoldEggs: number = 0;
buyGoldEgg.innerHTML = `Golden Egg: $${availableItems[2].cost}`;
buyGoldEgg.disabled = true;
buyGoldEgg.onclick = function buyUpgrade() {
  counterNum -= availableItems[2].cost;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += availableItems[2].rate;
  ownedGoldEggs += 1;
  availableItems[2].cost *= 1.15;
  buyGoldEgg.innerHTML = `Golden Egg: $${availableItems[2].cost}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < availableItems[2].cost) {
    buyGoldEgg.disabled = true;
  }
  updateCounter();
};
app.append(buyGoldEgg);

//Upgrade D
const buyMysticalEgg = document.createElement("button");
let ownedMysticEggs: number = 0;
buyMysticalEgg.innerHTML = `Mystical Egg: $${availableItems[3].cost}`;
buyMysticalEgg.disabled = true;
buyMysticalEgg.onclick = function buyUpgrade() {
  counterNum -= availableItems[3].cost;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += availableItems[3].rate;
  ownedMysticEggs += 1;
  availableItems[3].cost *= 1.15;
  buyMysticalEgg.innerHTML = `Mystical Egg: $${availableItems[3].cost}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < availableItems[3].cost) {
    buyMysticalEgg.disabled = true;
  }
  updateCounter();
};
app.append(buyMysticalEgg);

//Upgrade E
const buyGalacticEgg = document.createElement("button");
let ownedGalacticEggs: number = 0;
buyGalacticEgg.innerHTML = `Galactic Egg: $${availableItems[4].cost}`;
buyGalacticEgg.disabled = true;
buyGalacticEgg.onclick = function buyUpgrade() {
  counterNum -= availableItems[4].cost;
  counterText.innerHTML = `${counterNum} chickens`;
  growthRate += availableItems[4].rate;
  ownedGalacticEggs += 1;
  availableItems[4].cost *= 1.15;
  buyGalacticEgg.innerHTML = `Galactic Egg: $${availableItems[4].cost}`;
  header.innerHTML = `${growthRate} chickens per second`;
  if (counterNum < availableItems[4].cost) {
    buyGalacticEgg.disabled = true;
  }
  updateCounter();
};
app.append(buyGalacticEgg);

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
descriptionButton.onclick = function toggleDescriptions() {
  if (descriptionButton.style.visibility == "visible") {
    descriptionText.style.visibility = "hidden";
  } else {
    descriptionText.style.visibility = "visible";
  }
};
app.append(descriptionButton);
app.append(descriptionText);
