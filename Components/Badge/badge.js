const btn = document.querySelector("#btnHide");
const badgeHidden = document.querySelector("#hideBadge");

const hiddenFn = () => {
  if (badgeHidden.style.visibility === "visible")
    badgeHidden.style.visibility = "hidden";
  else badgeHidden.style.visibility = "visible";
};

btn.addEventListener("click", hiddenFn);
