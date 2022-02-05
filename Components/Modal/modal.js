const openAlertBoxBtn = document.querySelector("#alertBtn");
const alertBox = document.querySelector("#alertBox");
const yesAlertBox = document.querySelector("#alertYes");
const noAlertBox = document.querySelector("#alertYes");
const closeAlert = document.querySelector("#alertClose");


const  displayAlertBox = () => {
  openAlertBoxBtn.style.opacity = "0";
  alertBox.style.opacity = "1";
}

const hideAlertBox = () => {
  openAlertBoxBtn.style.opacity = "1";
  alertBox.style.opacity = "0";
}

openAlertBoxBtn.addEventListener("click", displayAlertBox);
yesAlertBox.addEventListener("click", hideAlertBox);
noAlertBox.addEventListener("click", hideAlertBox);
closeAlert.addEventListener("click", hideAlertBox);
