export function colorsactiveFunch() {
  const colorwrapper = [...document.querySelectorAll(".color-wrapper")];

  colorwrapper.forEach((item) => {
    item.addEventListener("click", function () {
      colorwrapper.forEach((colors) => {
        colors.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
}

export function sizeSactiveFunch() {
  const valueslist = [...document.querySelector(".values-list").children];
  console.log(valueslist);
  valueslist.forEach((item) => {
    item.addEventListener("click", function () {
      valueslist.forEach((value) => {
        value.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
}
