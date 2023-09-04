import headerFunc from "./header.js";
import productsFunc from "./product.js";
import { thumbsActiveFunch } from "./single-product/thumbsActive.js";
import { searchFunch } from "./search.js";
import { productClick } from "./search.js";
import { searchProductFunch } from "./search.js";

(async function () {
  const photos = await fetch("../data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc(data);
})();

//! add cartItems to localStorage start
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
//! add cartItems to localStorage end
searchFunch();
productClick();
searchProductFunch();
