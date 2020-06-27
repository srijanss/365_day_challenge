import "bootstrap";
import "../sass/main.scss";
import "./custom";

const _shopDropdownLink = document.querySelector("#shop-dropdown-link");
const _shopDropdown = document.querySelector(".shop__dropdown");
const _contactUsDropdownLink = document.querySelector(
  "#contact-us-dropdown-link"
);
const _contactUsDropdown = document.querySelector(".contact-us__dropdown");

_shopDropdownLink.addEventListener("mouseover", () => {
  _shopDropdown.style.setProperty("--k", 1);
});
_shopDropdownLink.addEventListener("mouseout", () => {
  _shopDropdown.style.setProperty("--k", 0);
});

_contactUsDropdownLink.addEventListener("mouseover", () => {
  _contactUsDropdown.style.setProperty("--k", 1);
});
_contactUsDropdownLink.addEventListener("mouseout", () => {
  _contactUsDropdown.style.setProperty("--k", 0);
});
