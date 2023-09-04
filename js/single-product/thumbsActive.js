export function thumbsActiveFunch() {
  const thumbs = [...document.querySelectorAll(".gallery-thumbs  .img-fluid")];
  const singlePruduct = document.querySelector("#single-image");

  thumbs.forEach((item) => {
    item.addEventListener("click", function () {
      thumbs.forEach((thumb) => {
        thumb.classList.remove("active");
      });
      singlePruduct.src = item.src;
      item.classList.add("active");
    });
  });
}
