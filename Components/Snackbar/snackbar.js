const baselineButton = document.querySelector(".baseline-button");
const loadingButton = document.querySelector(".loading-button");
const stackedButton = document.querySelector(".stacked-button");
const baselineSnackbar = document.querySelector(".baseline-snackbar");
const loadingSnackbar = document.querySelector(".loading-snackbar");
const stackedSnackbar = document.querySelector(".stacked-snackbar");
const cancelBaselineSnackbar = document.querySelector(".cancel-baseline-snackbar");
const cancelLoadingSnackbar = document.querySelector(
  ".cancel-loading-snackbar"
);
const cancelStackedSnackbar = document.querySelector(
  ".cancel-stacked-snackbar"
);

function snackBarBaseline() {
  baselineSnackbar.style.visibility = "visible";
}
function snackBarLoading() {
  loadingSnackbar.style.visibility = "visible";
}
function snackBarStacked() {
  stackedSnackbar.style.visibility = "visible";
}

function closeBaselineSnackbar() {
  baselineSnackbar.style.visibility = "hidden";
}
function closeLoadingSnackbar() {
  loadingSnackbar.style.visibility = "hidden";
}
function closeStackedSnackbar() {
  stackedSnackbar.style.visibility = "hidden";
}

baselineButton.addEventListener("click", snackBarBaseline);
loadingButton.addEventListener("click", snackBarLoading);
stackedButton.addEventListener("click", snackBarStacked);
cancelBaselineSnackbar.addEventListener("mousedown", closeBaselineSnackbar);
cancelLoadingSnackbar.addEventListener("mousedown", closeLoadingSnackbar);
cancelStackedSnackbar.addEventListener("mousedown", closeStackedSnackbar);
