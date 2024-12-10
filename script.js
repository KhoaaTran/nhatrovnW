const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".navbar");
const navClose = document.querySelector(".nav__close");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const popup = document.querySelector(".pop-up-wrapper");
const btnClosePopup = document.querySelector(".pop-up-icon");

const headerIcon = document.querySelector(".header__link-icon");
const headerLink = headerIcon.closest(".header__link");
const subMenuLv2 = document.querySelector(".navbar-lv2");

const footerProduct = document.querySelector(".footer__link-product");
const footerProductIcon = document.querySelector(".footer__link-icon");
const footerLinkProduct = document.querySelector(".footer__list-product");

headerLink.addEventListener("click", function () {
  subMenuLv2.classList.toggle("d-block");
  headerIcon.classList.toggle("rotate");
});

function menuToggle(show = "toggle") {
  if (show === "toggle") {
    navMenu.classList.toggle("show-menu");
    overlay.classList.toggle("show-overlay");
  } else {
    navMenu.classList.remove("show-menu");
    navMenu.classList.remove("show-overlay");
  }
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    menuToggle("toggle");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    menuToggle();
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    menuToggle();
  });
}

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
});

footerProduct.addEventListener("click", function () {
  footerProductIcon.classList.toggle("rotate");
  footerLinkProduct.classList.toggle("hidden");
});

sr.reveal(`.banner__img-wrap`, { interval: 100 });

sr.reveal(`.content__item`, {
  interval: 100,
  origin: "bottom",
});

sr.reveal(".blog__heading");

sr.reveal(`.blog-vd, .inner__left, .overview__left`, { origin: "left" });

sr.reveal(`.form__deposit, .overview__wrap`, { origin: "right" });

sr.reveal(".content__heading-wrap, .detail", { origin: "bottom" });

// ************************** Pop up ****************************
function d2(n) {
  return (n < 10 ? "0" : "") + n;
}

function convertDateObject(time) {
  return `${d2(time.getDate())}/${d2(
    time.getMonth() + 1
  )}/${time.getFullYear()}`;
}

// Set LocalStorage
function setKey(key) {
  const now = new Date().getTime();

  let date = new Date(now);
  const item = {
    expiration: convertDateObject(date),
  };

  localStorage.setItem(key, JSON.stringify(item));
}

function updateKey(key) {
  if (!compareDate) {
    localStorage.removeItem(key);
  }
}

function compareDate(key) {
  const itemStr = localStorage.getItem(key);

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const now = new Date().getTime();
  const date = new Date(now);

  const curDate = convertDateObject(date);
  const item = JSON.parse(itemStr);
  return curDate === item.expiration;
}

if (!compareDate("pop-up")) {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("stop-scrolling");
}

// Close Popup
const closeModal = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("stop-scrolling");
  setKey("pop-up");
  updateKey("pop-up");
};

btnClosePopup.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

window.onload = function () {
  window.scrollTo(0, 0);
};
