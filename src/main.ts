import "./style.css";

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
