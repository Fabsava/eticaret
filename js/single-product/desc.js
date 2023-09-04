export function descFunch() {
  const tabbutton = [...document.querySelectorAll(".tab-button ")];
  const tabpanel = [...document.querySelectorAll(".content")];
  const singletabs = document.querySelector(".tab-list");
  console.log(tabpanel);
  singletabs.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      tabbutton.forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
      tabpanel.forEach((content) => content.classList.remove("active"));
      const element = document.getElementById(id);
      console.log(element);
      element.classList.add("active");
    }
  });
}
