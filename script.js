// ❤️ Heart Button Functionality
let heartCount = 0;
const heartCounter = document.getElementById("heart-count");
const heartClick = document.getElementsByClassName("heart");

for (let i = 0; i < heartClick.length; i++) {
  heartClick[i].onclick = function () {
    heartCount++;
    heartCounter.innerText = heartCount;
  };
}

// 💰 Coin and Call History Functionality
let coins = 100;
const coinDisplay = document.getElementById("coin");
const historyList = document.getElementById("history-list");

// Call Buttons and Related IDs
const services = [
  {
    callBtnId: "national-emergecy-call",
    serviceId: "national-emergecy-service",
    numberId: "national-emergecy-number",
  },
  {
    callBtnId: "police-call",
    serviceId: "police-service",
    numberId: "police-number",
  },
  {
    callBtnId: "fire-service-call",
    serviceId: "fire-service",
    numberId: "fire-service-number",
  },
  {
    callBtnId: "ambulance-call",
    serviceId: "ambulance",
    numberId: "ambulance-number",
  },
  {
    callBtnId: "womenChildHelpline-call",
    serviceId: "womenChildHelpline-service",
    numberId: "womenChildHelpline-number",
  },
  {
    callBtnId: "anti-corruption-call",
    serviceId: "anti-corruption-service",
    numberId: "anti-corruption-number",
  },
  {
    callBtnId: "electricity-outage-call",
    serviceId: "electricity-outage-service",
    numberId: "electricity-outage-number",
  },
  {
    callBtnId: "brac-call",
    serviceId: "brac-service",
    numberId: "brac-number",
  },
  {
    callBtnId: "bangladesh-railway-call",
    serviceId: "bangladesh-railway-service",
    numberId: "railway-number",
  },
];

for (const service of services) {
  const callButton = document.getElementById(service.callBtnId);
  callButton.addEventListener("click", function () {
    if (coins < 20) {
      alert("Insufficient coins to make a call. You need at least 20 coins.");
      return;
    }

    const serviceName = document.getElementById(service.serviceId).innerText;
    const serviceNumber = document.getElementById(service.numberId).innerText;

    coins -= 20;
    coinDisplay.innerText = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const historyItem = document.createElement("li");
    historyItem.className = "p-2 border-b text-sm";
    historyItem.innerHTML = `
      <p>${serviceName}</p>
      <span>${serviceNumber}</span><br>
      <span>${timeString}</span>
    `;
    historyList.appendChild(historyItem);
  });
}

// 🧹 Clear History Button
const clearBtn = document.getElementById("clear-history");
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});

// 📋 Copy Button Functionality
let copyCount = 0;
const copyCountDisplay = document.getElementById("copy-count");

// List of all Copy Buttons with related number IDs
const copyButtons = [
  { btnId: "neCopyBtn", numberId: "national-emergecy-number" },
  { btnId: "pCopyBtn", numberId: "police-number" },
  { btnId: "fsCopyBtn", numberId: "fire-service-number" },
  { btnId: "aCopyBtn", numberId: "ambulance-number" },
  { btnId: "w&cCopyBtn", numberId: "womenChildHelpline-number" },
  { btnId: "acCopyBtn", numberId: "anti-corruption-number" },
  { btnId: "eCopyBtn", numberId: "electricity-outage-number" },
  { btnId: "bCopyBtn", numberId: "brac-number" },
  { btnId: "brCopyBtn", numberId: "railway-number" },
];

for (const item of copyButtons) {
  const button = document.getElementById(item.btnId);
  const numberElement = document.getElementById(item.numberId);

  button.addEventListener("click", function () {
    const number = numberElement.innerText;

    navigator.clipboard.writeText(number)
      .then(() => {
        alert(`Copied: ${number}`);
        copyCount++;
        copyCountDisplay.innerText = copyCount;
      })
      .catch(() => {
        alert("Failed to copy");
      });
  });
}
