const btnCloseArray = document.querySelectorAll(".btn-close");
const arrProducts = Array.from(btnCloseArray).map((btnClose) =>
  btnClose.addEventListener("click", onCrossClick)
);

function onCrossClick() {
  this.parentNode.remove();
  const btnCloseArrayNew = document.querySelectorAll(".btn-close");
  if (btnCloseArrayNew.length === 0) {
    document.querySelector(".cart-empty-container").style.display = "flex";
    document.querySelector(".cart-price").style.display = "none";
    document.querySelector(".cart-header.heading5").style.display = "none";
    document.querySelector(".cart-items").style.borderRight = "0px";
  }
}
