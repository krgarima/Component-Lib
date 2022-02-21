//SIMPLE ALERT

const btnSimplePrimary = document.querySelector('#btnSimplePrimary');
const alertSimplePrimary = document.querySelector('#alertSimplePrimary');
const btnSimpleError = document.querySelector('#btnSimpleError');
const alertSimpleError = document.querySelector('#alertSimpleError');
const btnSimpleSuccess = document.querySelector('#btnSimpleSuccess');
const alertSimpleSuccess = document.querySelector('#alertSimpleSuccess');
const btnSimpleWarning = document.querySelector('#btnSimpleWarning');
const alertSimpleWarning = document.querySelector('#alertSimpleWarning');

//OUTLINED ALERT

const btnOutlinedPrimary = document.querySelector('#btnOutlinedPrimary');
const alertOutlinedPrimary = document.querySelector('#alertOutlinedPrimary');
const btnOutlinedError = document.querySelector('#btnOutlinedError');
const alertOutlinedError = document.querySelector('#alertOutlinedError');
const btnOutlinedSuccess = document.querySelector('#btnOutlinedSuccess');
const alertOutlinedSuccess = document.querySelector('#alertOutlinedSuccess');
const btnOutlinedWarning = document.querySelector('#btnOutlinedWarning');
const alertOutlinedWarning = document.querySelector('#alertOutlinedWarning');

const alertCancel = document.querySelector('#alertCancel');
const actionAlert = document.querySelector('#actionAlert');

const openAlertSimplePrimary = () => {
    (alertSimplePrimary.style.visibility === "visible") ? (alertSimplePrimary.style.visibility = "hidden") : (alertSimplePrimary.style.visibility = "visible");
    setTimeout(() => {
        alertSimplePrimary.style.visibility = "hidden";
    }, 800);
}
const openAlertSimpleError = () => {
    (alertSimpleError.style.visibility === "visible") ? (alertSimpleError.style.visibility = "hidden") : (alertSimpleError.style.visibility = "visible");
    setTimeout(() => {
    alertSimpleError.style.visibility = "hidden";
    }, 800);
}
const openAlertSimpleSuccess = () => {
    (alertSimpleSuccess.style.visibility === "visible") ? (alertSimpleSuccess.style.visibility = "hidden") : (alertSimpleSuccess.style.visibility = "visible");
    setTimeout(() => {
        alertSimpleSuccess.style.visibility = "hidden";
    }, 800);
}
const openAlertSimpleWarning = () => {
    (alertSimpleWarning.style.visibility === "visible") ? (alertSimpleWarning.style.visibility = "hidden") : (alertSimpleWarning.style.visibility = "visible");
    setTimeout(() => {
        alertSimpleWarning.style.visibility = "hidden";
    }, 800);
}

const openAlertOutlinedPrimary = () => {
    (alertOutlinedPrimary.style.visibility === "visible") ? (alertOutlinedPrimary.style.visibility = "hidden") : (alertOutlinedPrimary.style.visibility = "visible");
    setTimeout(() => {
        alertOutlinedPrimary.style.visibility = "hidden";
    }, 800);
}
const openAlertOutlinedError = () => {
    (alertOutlinedError.style.visibility === "visible") ? (alertOutlinedError.style.visibility = "hidden") : (alertOutlinedError.style.visibility = "visible");
    setTimeout(() => {
        alertOutlinedError.style.visibility = "hidden";
    }, 800);
}
const openAlertOutlinedSuccess = () => {
    (alertOutlinedSuccess.style.visibility === "visible") ? (alertOutlinedSuccess.style.visibility = "hidden") : (alertOutlinedSuccess.style.visibility = "visible");
    setTimeout(() => {
        alertOutlinedSuccess.style.visibility = "hidden";
    }, 800);
}
const openAlertOutlinedWarning = () => {
    (alertOutlinedWarning.style.visibility === "visible") ? (alertOutlinedWarning.style.visibility = "hidden") : (alertOutlinedWarning.style.visibility = "visible");
    setTimeout(() => {
        alertOutlinedWarning.style.visibility = "hidden";
    }, 800);
}

const closeActionAlert = () => {
    actionAlert.style.display ="none";
    console.log("yo")
}


btnSimplePrimary.addEventListener('click', openAlertSimplePrimary);
btnSimpleError.addEventListener('click', openAlertSimpleError);
btnSimpleSuccess.addEventListener('click', openAlertSimpleSuccess);
btnSimpleWarning.addEventListener('click', openAlertSimpleWarning);

btnOutlinedPrimary.addEventListener('click', openAlertOutlinedPrimary);
btnOutlinedError.addEventListener('click', openAlertOutlinedError);
btnOutlinedSuccess.addEventListener('click', openAlertOutlinedSuccess);
btnOutlinedWarning.addEventListener('click', openAlertOutlinedWarning);

alertCancel.addEventListener('click', closeActionAlert);