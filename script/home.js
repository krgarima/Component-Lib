const hamburgerMenuModal = document.querySelector("#hamburgerMenuModal");
const modalDrawer = document.querySelector("#modalDrawer");
const closeModalDrawer = document.querySelector("#modalDrawerMainBody");

function openModalDrawer() {
  modalDrawer.style.visibility === "visible"
    ? (modalDrawer.style.visibility = "hidden")
    : (modalDrawer.style.visibility = "visible");
  closeModalDrawer.style.backgroundColor = "rgb(145, 145, 145)";
}

function closeModalDrawerFn() {
  if (modalDrawer.style.visibility === "visible")
    modalDrawer.style.visibility = "hidden";
  closeModalDrawer.style.backgroundColor = "white";
}

hamburgerMenuModal.addEventListener("click", openModalDrawer);
// closeModalDrawer.addEventListener("mousedown", closeModalDrawerFn);
