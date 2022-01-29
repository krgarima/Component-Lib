const btn = document.querySelector("#btnHide");
const badgeHidden = document.querySelector("#hideBadge");

function hiddenFn() {
  if (badgeHidden.style.opacity === "1") badgeHidden.style.opacity = 0;
  else badgeHidden.style.opacity = 1;
}

btn.addEventListener("click", hiddenFn);