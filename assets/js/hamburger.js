const content = document.querySelector(".hamburger-menu__content");
const contentItems = document.querySelectorAll(
  ".hamburger-menu__content-item",
);
const btn = document.querySelector(".hamburger-menu__btn");
const closeIcon = document.querySelector(
  "span.hamburger-menu__close-icon",
);
const menuIcon = document.querySelector("span.hamburger-menu__menu-icon");

function toggleMenu() {
  if (content.classList.contains("hamburger-menu__content--show")) {
    content.classList.remove("hamburger-menu__content--show");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    content.classList.add("hamburger-menu__content--show");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

btn.addEventListener("click", toggleMenu);

contentItems.forEach(function (contentItem) {
  contentItem.addEventListener("click", toggleMenu);
});
