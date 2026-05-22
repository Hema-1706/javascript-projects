const sliderImage = document.getElementById("sliderImage");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

const images = [

  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",

  "https://images.unsplash.com/photo-1519046904884-53103b34b206"

];

let currentIndex = 0;

sliderImage.src = images[currentIndex];

function showImage(index) {

  sliderImage.src = images[index];
}

function nextImage() {

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage(currentIndex);
}

function prevImage() {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage(currentIndex);
}

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", prevImage);

setInterval(nextImage, 3000);