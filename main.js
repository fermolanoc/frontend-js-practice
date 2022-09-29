const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productAside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  const isAsideClosed = productAside.classList.contains("inactive");

  if (!isAsideClosed) {
    productAside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

menuBurgerIcon.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  const isAsideClosed = productAside.classList.contains("inactive");

  if (!isAsideClosed) {
    productAside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

shoppingCartIcon.addEventListener("click", toggleShoppingCartAside);

function toggleShoppingCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed || !isDesktopMenuClosed) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
  }
  productAside.classList.toggle("inactive");
}
