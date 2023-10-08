"use strict";
let image = document.querySelector(".img");
function unBlurImage() {
    this.classList.add("un-blur");
    console.log(this);
}
image === null || image === void 0 ? void 0 : image.addEventListener("mouseenter", unBlurImage);
