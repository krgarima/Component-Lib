const hamburgerMenuDismissible1 = document.querySelector("#hamburgerMenuDismissible");
const dismissibleDrawer1 = document.querySelector("#dismissibleDrawer");
const hamburgerMenuModal1 = document.querySelector("#hamburgerMenuModal1");
const modalDrawer1 = document.querySelector("#modalDrawer1");
const closeModalDrawer1 = document.querySelector("#modalDrawerMainBody");
const closeHamburgerDrawer1 = document.querySelector("#dismissibleDrawerMainBody");

function openDismissibleDrawer() {
  dismissibleDrawer1.style.width === "0.0001rem"
    ? (dismissibleDrawer1.style.width = "18vw")
    : (dismissibleDrawer1.style.width = "0.0001rem");
}

function closeDismissibleDrawer() {
  dismissibleDrawer1.style.width === "0.0001rem"
    ? (dismissibleDrawer1.style.width = "18vw")
    : (dismissibleDrawer1.style.width = "0.0001rem");
}

function openModalDrawer() {
  modalDrawer1.style.visibility === "visible"
    ? (modalDrawer1.style.visibility = "hidden")
    : (modalDrawer1.style.visibility = "visible");
}

function closeModalDrawerFn() {
  if (modalDrawer1.style.visibility === "visible")
    modalDrawer1.style.visibility = "hidden";
}

hamburgerMenuDismissible1.addEventListener("click", openDismissibleDrawer);
closeHamburgerDrawer1.addEventListener("mousedown", closeDismissibleDrawer);
hamburgerMenuModal1.addEventListener("click", openModalDrawer);
closeModalDrawer1.addEventListener("mousedown", closeModalDrawerFn);
