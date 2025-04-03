const endDate =  "5 April 2025 10:00 AM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock(){
const end = new Date(endDate);
const now = new Date();

const Diff = (end - now) /  1000;
const days = Math.floor(Diff / 3600 / 24);
const hours = Math.floor(Diff / 3600) % 24;
const minutes = Math.floor(Diff / 60) % 60;
const seconds = Math.floor(Diff) % 60;
inputs[0].value = days;
inputs[1].value = hours;
inputs[2].value = minutes;
inputs[3].value = seconds;
}

setInterval(clock(), 1000);