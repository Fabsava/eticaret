import { thumbsActiveFunch } from "./single-product/thumbsActive.js";
import { zoomFunch } from "./single-product/zoom.js";
import { colorsactiveFunch } from "./single-product/active.js";
import { sizeSactiveFunch } from "./single-product/active.js";
import { descFunch } from "./single-product/desc.js";
import { commentFuch } from "./single-product/comment.js";
commentFuch();
descFunch();
colorsactiveFunch();
sizeSactiveFunch();
zoomFunch();
const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : localStorage.setItem("productId", JSON.stringify("1"));

const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

const findProduct = products.find((item) => item.id == productId);

const producttitle = document.querySelector(".product-title");

producttitle.textContent = findProduct.name;

const newPriceDOOM = document.querySelector(".new-price");
const oldPriceDOOM = document.querySelector(".old-price");

newPriceDOOM.innerHTML = findProduct.price.newPrice.toFixed(2);
oldPriceDOOM.innerHTML = findProduct.price.oldPrice.toFixed(2);

const prodcutImages = document.querySelector("#single-image");

prodcutImages.src = findProduct.img.singleImage;

const imgfluid = document.querySelector(".gallery-thumbs");
let i = 0;
function displayThumbs() {
  let result = "";
  findProduct.img.thumbs.forEach((item) => {
    result += `
    <li class="glide_slide">
                        <img
                          style="width: 100px; height: 100px; margin-left: 5px"
                          src="${item}"
                          class="img-fluid"
                        />
                      </li>
    `;
  });
  imgfluid.innerHTML += result;
}

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const addToCart = document.querySelector("#add-to-cart");
const id = findProduct.id;
const incart = cart.find((item) => item.id == id);
const inputQuantity = document.querySelector("#quantity");

if (incart) {
  addToCart.style.opacity = ".3";
  addToCart.setAttribute("disabled", "disabled");
} else {
  addToCart.addEventListener("click", function () {
    addToCart.style.opacity = ".3";
    addToCart.setAttribute("disabled", "disabled");

    const quantity = Number(inputQuantity.value);
    cart.push({ ...findProduct, quantity: quantity });
    localStorage.setItem("cart", JSON.stringify(cart));
    const cartItems = document.querySelector(".header-cart-count");

    cartItems.innerHTML = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).length
      : "0";
  });
}

displayThumbs();
thumbsActiveFunch();
