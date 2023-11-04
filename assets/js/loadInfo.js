const urlParams = new URLSearchParams(window.location.search);
const artistName = urlParams.get("name");

const container = document.querySelector(".swiper-wrapper");

var firstImage = document.getElementById("firstImage");
firstImage.src = `assets/img/artists/${artistName}/${artistName}-1.jpg`;
firstImage.alt = artistName;

function loadAllImages() {
  let n = 2;

  function loadImage() {
    const img = new Image();
    const imgPath = `assets/img/artists/${artistName}/${artistName}-${n}.jpg`;

    img.src = imgPath;
    img.alt = artistName;

    img.onload = function () {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("swiper-slide");
      imageContainer.appendChild(img);
      container.appendChild(imageContainer);

      n++;
      loadImage();
    };

    img.onerror = function () {
      if (n === 2) {
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

fetch("assets/documents/artistsInformation.txt")
  .then((response) => response.text())
  .then((data) => processData(data))
  .catch((error) => console.error("Error:", error));

function processData(data) {
  const artistData = data.split("\n\n");
  const artists = artistData.map((entry) => {
    const artistObj = {};
    entry.split("\n").forEach((line) => {
      const [key, value] = line.split(": ");
      artistObj[key] = value;
    });
    return artistObj;
  });

  console.log(artists);
  updateInformation(artists);
}

function updateInformation(information) {
  information.forEach((element) => {
    if(element['nombre'] ==artistName ){
      document.getElementById('debut').textContent = element['debut'];
      document.getElementById('followers').textContent = element['seguidores'];
      document.getElementById('album').textContent = element['ultimoAlbum'];
      document.getElementById('web').textContent = element['web'];
      document.getElementById('web').href = element['web'];
      document.getElementById('title').textContent = element['titulo'];
      document.getElementById('description').textContent = element['descripcion'];
    }

  });
}
