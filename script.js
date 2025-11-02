// Image filtering
function filterSelection(category) {
  let items = document.getElementsByClassName("gallery-item");
  if (category === "all") category = "";
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = items[i].className.includes(category) ? "block" : "none";
  }
}

// Lightbox functionality
let currentIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", () => {
  images = Array.from(document.querySelectorAll(".gallery-item img"));
  images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });
});

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = images[index].src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

// Allow closing lightbox by clicking outside or pressing Esc
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
