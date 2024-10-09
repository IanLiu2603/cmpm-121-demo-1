import "./style.css";

let start: number;
let prev: number;

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My amazing game hi";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

//Counter
let counterNum: number = 0;
const counterText = document.createElement("div");
counterText.innerHTML = `${counterNum} clicks`;
app.append(counterText);

//Button
const middleButton = document.createElement("button");
middleButton.innerHTML = "🐥";
middleButton.onclick = function buttonClick() {
  counterNum += 1;
  counterText.innerHTML = `${counterNum} clicks`;
};
app.append(middleButton);

//Auto Clicker
requestAnimationFrame(step);

// setInterval(click, 1000);
// function click() {
//   counterNum += 1;
//   counterText.innerHTML = `${counterNum} clicks`;
// }
function step(timestamp: number) {
  if (start === undefined) {
    start = timestamp;
    prev = timestamp;
  } else {
    const timeGap = timestamp - prev;
    counterNum += timeGap / 1000;
    counterText.innerHTML = `${counterNum} clicks`;
    prev = timestamp;
  }
  requestAnimationFrame(step);
}
