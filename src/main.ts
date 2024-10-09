import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My amazing game hi";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const middleButton = document.createElement("button");
middleButton.innerHTML = "🐥";
app.append(middleButton);
