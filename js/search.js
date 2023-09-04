export function searchFunch() {
  const modal_search = document.querySelector(".results");
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];

  let results = "";
  Array.from(products).forEach((item) => {
    results += `
<a href="#" class="result-item" data-id=${item.id} >
    <img
    src="${item.img.singleImage}"
    class="search-thumb"
    alt=""
    />
    <div class="search-info">
    <h4 >${item.name}</h4>
    <span class="search-sku">SKU: PD0016</span>
    <span class="search-price">${item.price.newPrice}</span>
    </div>
</a>
  `;

    modal_search.innerHTML = results;
  });
}

export function productClick() {
  const resultitem = [...document.querySelectorAll(".result-item")];
  console.log(resultitem);
  resultitem.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      const id = item.dataset.id;
      localStorage.setItem("productId", JSON.parse(id));

      window.location.href = "single-product.html";
    });
  });
}

export function searchProductFunch() {
  const searchform = document.querySelector(".search-form input");
  const searchbutton = document.querySelector(".search-form button");
  const resultitem = [...document.querySelectorAll(".result-item")];
  const modal_search = document.querySelector(".results");
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];

  searchform.addEventListener("keyup", function (e) {
    let results = "";
    products.forEach((name) => {
      if (name.name.trim().toLowerCase().includes(e.target.value)) {
        resultitem.forEach((item) => {
          item.style.display = "none";
        });
        const id = name.id;
        results += `
        <a href="#" class="result-item" data-id=${name.id} >
            <img
            src="${name.img.singleImage}"
            class="search-thumb"
            alt=""
            />
            <div class="search-info">
            <h4 >${name.name}</h4>
            <span class="search-sku">SKU: PD0016</span>
            <span class="search-price">${name.price.newPrice}</span>
            </div>
        </a>
          `;

        modal_search.innerHTML = results;
        productClick();
      } else {
        resultitem.forEach((item) => {
          item.style.display = "none";
          productClick();
        });
      }
    });
  });
}
