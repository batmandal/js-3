const left = document.querySelector(".left");
const right = document.querySelector(".right");
const images = document.querySelector(".images");


let index = 1;

let isTransitioning = false;

left.addEventListener("click", () => {
 if (isTransitioning) return;
//  if (index == 1) return;
 index--;
 images.style.transition = "transform 0.4s ease-in-out";
 images.style.transform = `translateX(${-index * 100 / 7}%)`;
});


right.addEventListener("click", () => {
 if (isTransitioning) return;
//  if (index == 6) return;

 index++;
 images.style.transition = "transform 0.4s ease-in-out";
 images.style.transform = `translateX(${-index * 100 / 7}%)`;
});


images.addEventListener("transitionend", () => {
 if (index === 6) {
 index = 1;
 images.style.transition = "none";
 images.style.transform = `translateX(${-index * 100 / 7}%)`;
 } else if (index === 0) {
 index = 5;
 images.style.transition = "none";
 images.style.transform = `translateX(${-index * 100 / 7}%)`;
 }
 isTransitioning = false;
});


images.addEventListener("transitionstart", () => {
 isTransitioning = true;
});



