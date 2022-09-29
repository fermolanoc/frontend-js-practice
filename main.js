const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productAside = document.querySelector(".product-detail");
const productsContainer = document.querySelector(".cards-container");

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

const productList = [];
productList.push({
  name: "Bike",
  price: 120.0,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: 230.5,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Laptop",
  price: 990.0,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    // Create HTML elements & assign properties
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productPrice = document.createElement("p");
    productPrice.innerText = `$${product.price}`;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const addToCartFigure = document.createElement("figure");
    const addToCartImg = document.createElement("img");
    addToCartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    addToCartFigure.append(addToCartImg);

    const productInfoDiv = document.createElement("div");

    // Append elements to their parents
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, addToCartFigure);
    productCard.append(productImg, productInfo);
    productsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
