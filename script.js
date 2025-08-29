//  Heart Button Functionality
let heartCount = 0;
const heartCounter = document.getElementById("heart-count");
const heartClick = document.getElementsByClassName("heart");

for (let i = 0; i < heartClick.length; i++) {
  heartClick[i].onclick = function () {
    heartCount++;
    heartCounter.innerText = heartCount;
  };
}

let coins = 100;
const coinDisplay = document.getElementById("coin");
const historyList = document.getElementById("history-list");

//  making an array to call easily with object
const services = [
    {
      callBtnId: "national-emergency-call",
      serviceId: "national-emergency-service",
      numberId: "national-emergency-number",
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