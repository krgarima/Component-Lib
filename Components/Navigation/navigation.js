const hamburgerMenuDismissible1 = document.querySelector(
  "#hamburgerMenuDismissible"
);
const dismissibleDrawer1 = document.querySelector("#dismissibleDrawer");
const hamburgerMenuModal1 = document.querySelector("#hamburgerMenuModal1");
const modalDrawer1 = document.querySelector("#modalDrawer1");
const closeModalDrawer1 = document.querySelector("#modalDrawerMainBody");
const closeHamburgerDrawer1 = document.querySelector(
  "#dismissibleDrawerMainBody"
);

const openDismissibleDrawer1 = () => {
  dismissibleDrawer1.style.width === "0px"
    ? (dismissibleDrawer1.style.width = "18vw")
    : (dismissibleDrawer1.style.width = "0px");
};

const closeDismissibleDrawer1 = () => {
  dismissibleDrawer1.style.width === "0px"
    ? (dismissibleDrawer1.style.width = "18vw")
    : (dismissibleDrawer1.style.width = "0px");
};

const openModalDrawer1 = () => {
  modalDrawer1.style.visibility === "visible"
    ? (modalDrawer1.style.visibility = "hidden")
    : (modalDrawer1.style.visibility = "visible");
};

const closeModalDrawerFn1 = () => {
  if (modalDrawer1.style.visibility === "visible")
    modalDrawer1.style.visibility = "hidden";
};

hamburgerMenuDismissible1.addEventListener("click", openDismissibleDrawer1);
closeHamburgerDrawer1.addEventListener("mousedown", closeDismissibleDrawer1);
hamburgerMenuModal1.addEventListener("click", openModalDrawer1);
closeModalDrawer1.addEventListener("mousedown", closeModalDrawerFn1);
