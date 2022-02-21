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

const snackBarBaseline = () => {
  baselineSnackbar.style.visibility = "visible";
  setTimeout(() => {closeBaselineSnackbar()}, 3000);
}
const snackBarLoading = () => {
  loadingSnackbar.style.visibility = "visible";
  setTimeout(() => {closeLoadingSnackbar()}, 3000);
}
const snackBarStacked = () => {
  stackedSnackbar.style.visibility = "visible";
  setTimeout(() => {closeStackedSnackbar()}, 3000);
}

const closeBaselineSnackbar = () => {
  baselineSnackbar.style.visibility = "hidden";
}
const closeLoadingSnackbar = () => {
  loadingSnackbar.style.visibility = "hidden";
}
const closeStackedSnackbar = () => {
  stackedSnackbar.style.visibility = "hidden";
}

baselineButton.addEventListener("click", snackBarBaseline);
loadingButton.addEventListener("click", snackBarLoading);
stackedButton.addEventListener("click", snackBarStacked);
cancelBaselineSnackbar.addEventListener("mousedown", closeBaselineSnackbar);
cancelLoadingSnackbar.addEventListener("mousedown", closeLoadingSnackbar);
cancelStackedSnackbar.addEventListener("mousedown", closeStackedSnackbar);
