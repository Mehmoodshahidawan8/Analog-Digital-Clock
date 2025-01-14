// script.js

// Initial default time
let currentTime = new Date();

// Function to update the digital clock
function updateDigitalClock() {
  const digitalTime = currentTime.toLocaleTimeString();
  document.getElementById("digital-time").innerText = digitalTime;
}

// Function to update the analog clock
function updateAnalogClock() {
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  const secondDegree = (seconds / 60) * 360;
  const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegree = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

  document.getElementById("second-hand").style.transform = `translateX(-50%) translateY(-50%) rotate(${secondDegree}deg)`;
  document.getElementById("minute-hand").style.transform = `translateX(-50%) translateY(-50%) rotate(${minuteDegree}deg)`;
  document.getElementById("hour-hand").style.transform = `translateX(-50%) translateY(-50%) rotate(${hourDegree}deg)`;
}

// Toggle clock view (digital / analog)
let isDigital = true;
function toggleView() {
  const digitalClock = document.getElementById("digital-clock");
  const analogClock = document.getElementById("analog-clock");
  if (isDigital) {
    digitalClock.style.display = "none";
    analogClock.style.display = "block";
  } else {
    digitalClock.style.display = "block";
    analogClock.style.display = "none";
  }
  isDigital = !isDigital;
}

// Function to set a new time from the input
function setNewTime() {
  const newTime = document.getElementById("new-time").value;
  if (newTime) {
    const [hours, minutes] = newTime.split(":");
    currentTime.setHours(hours);
    currentTime.setMinutes(minutes);
    currentTime.setSeconds(0); // Reset seconds to 0
  }
}

// Event listeners
document.getElementById("toggle-view-btn").addEventListener("click", toggleView);
document.getElementById("set-time-btn").addEventListener("click", setNewTime);

// Initial update
setInterval(() => {
  updateDigitalClock();
  updateAnalogClock();
}, 1000);
