export function zoomFunch() {
  const singleImages = document.querySelector("#single-image");
  const singleImageswrapper = document.querySelector(".single-image-wrapper");

  singleImageswrapper.addEventListener("mousemove", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    singleImages.style.transformOrigin = `${x}px ${y}px`;
    singleImages.style.transform = "scale(5)";
  });
  singleImageswrapper.addEventListener("mouseleave", function (e) {
    singleImages.style.transformOrigin = "center";
    singleImages.style.transform = "scale(1)";
  });
}
