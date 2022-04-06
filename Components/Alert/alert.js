//SIMPLE ALERT

const btnSimplePrimary = document.querySelector("#btnSimplePrimary");
const alertSimplePrimary = document.querySelector("#alertSimplePrimary");
const btnSimpleError = document.querySelector("#btnSimpleError");
const alertSimpleError = document.querySelector("#alertSimpleError");
const btnSimpleSuccess = document.querySelector("#btnSimpleSuccess");
const alertSimpleSuccess = document.querySelector("#alertSimpleSuccess");
const btnSimpleWarning = document.querySelector("#btnSimpleWarning");
const alertSimpleWarning = document.querySelector("#alertSimpleWarning");

//OUTLINED ALERT

const btnOutlinedPrimary = document.querySelector("#btnOutlinedPrimary");
const alertOutlinedPrimary = document.querySelector("#alertOutlinedPrimary");
const btnOutlinedError = document.querySelector("#btnOutlinedError");
const alertOutlinedError = document.querySelector("#alertOutlinedError");
const btnOutlinedSuccess = document.querySelector("#btnOutlinedSuccess");
const alertOutlinedSuccess = document.querySelector("#alertOutlinedSuccess");
const btnOutlinedWarning = document.querySelector("#btnOutlinedWarning");
const alertOutlinedWarning = document.querySelector("#alertOutlinedWarning");

const alertCancel = document.querySelector("#alertCancel");
const actionAlert = document.querySelector("#actionAlert");
const btnUndo = document.querySelector("#btnUndo");

const openAlert = (alert) => {
  alert.style.visibility === "visible"
    ? (alert.style.visibility = "hidden")
    : (alert.style.visibility = "visible");
  setTimeout(() => {
    alert.style.visibility = "hidden";
  }, 800);
};

const closeActionAlert = () => {
  actionAlert.style.display = "none";
};

btnSimplePrimary.addEventListener("click", () => openAlert(alertSimplePrimary));
btnSimpleError.addEventListener("click", () => openAlert(alertSimpleError));
btnSimpleSuccess.addEventListener("click", () => openAlert(alertSimpleSuccess));
btnSimpleWarning.addEventListener("click", () => openAlert(alertSimpleWarning));

btnOutlinedPrimary.addEventListener("click", () =>
  openAlert(alertOutlinedPrimary)
);
btnOutlinedError.addEventListener("click", () => openAlert(alertOutlinedError));
btnOutlinedSuccess.addEventListener("click", () =>
  openAlert(alertOutlinedSuccess)
);
btnOutlinedWarning.addEventListener("click", () =>
  openAlert(alertOutlinedWarning)
);

alertCancel.addEventListener("click", closeActionAlert);
