const hamburgerMenuModal = document.querySelector("#hamburgerMenuModal");
const modalDrawer = document.querySelector("#modalDrawer");
const closeModalDrawer = document.querySelector("#modalDrawerMainBody");
const closeDrawer = document.querySelector("#close");

function openModalDrawer() {
  modalDrawer.style.visibility === "visible"
    ? (modalDrawer.style.visibility = "hidden")
    : (modalDrawer.style.visibility = "visible");
}

function closeModalDrawerFn() {
  if (modalDrawer.style.visibility === "visible")
    modalDrawer.style.visibility = "hidden";
}

hamburgerMenuModal.addEventListener("click", openModalDrawer);
closeDrawer.addEventListener("click", closeModalDrawerFn);