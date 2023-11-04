/*const swiperContainer = document.querySelector(".artists-details-slider");

if (swiperContainer.swiper) {
  swiperContainer.swiper.destroy(true, true);
}

//swiperContainer.innerHTML = ''; // Eliminar todas las slides existentes
*/
const urlParams = new URLSearchParams(window.location.search);
const artistName = urlParams.get("name");

const container = document.querySelector(".swiper-wrapper");

function loadAllImages() {
  let n = 1;

  function loadImage() {
    const img = new Image();
    const imgPath = `assets/img/artists/${artistName}/${artistName}-${n}.jpg`;

    img.src = imgPath;

    img.onload = function () {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("swiper-slide");
      imageContainer.appendChild(img);
      container.appendChild(imageContainer);

      n++;
      loadImage();
    };

    img.onerror = function () {
      if (n === 1) {
        console.log("No hay imágenes para cargar.");
      }
    };
  }

  loadImage();
}

loadAllImages();
/*
// Inicializar un nuevo Swiper con las slides actualizadas
const mySwiper = new Swiper(".artists-details-slider", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

// Después de cargar las nuevas slides, actualizar el Swiper
mySwiper.update();
mySwiper.slideTo(0);
*/