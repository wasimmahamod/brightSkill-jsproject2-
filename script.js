const itemimg = document.querySelectorAll("#itemimg");
const popupbox = document.querySelector("#popupbox");
const popupimg = document.querySelector("#popupimg");

itemimg.forEach((img) => {
  img.addEventListener("click", function () {
    popupbox.style.display = "flex";

    popupimg.src = img.src;
  });
});
