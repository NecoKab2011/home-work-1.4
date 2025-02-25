const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryElements = images
  .map(
    (images) => `<li class="gallery__item">
         <a
           class="gallery__link"
           href="${images.preview}"
         >
           <img
             class="gallery__image"
            src="${images.original}"
            data-source="${images.preview}"
            alt="${images.description}"
          />
         </a>
       </li>`
  )
  .join("");

const galleryList = document.querySelector(".js-gallery");
galleryList.innerHTML = galleryElements;

const lightbox = document.querySelector(".js-lightbox");
const modalOverlay = document.querySelector(".lightbox__overlay");
const closeModal = document.querySelector(`[data-action="close-lightbox"]`);
const img = document.querySelector(".lightbox__image");

galleryList.addEventListener("click", (event) => {
  if (event.target.nodeName === galleryList) {
    return;
  }
  const galleryItem = event.target.closest(".gallery__item");
  const imgInfo = galleryItem.firstElementChild.firstElementChild;
  img.src = imgInfo.src;
  img.alt = imgInfo.alt;
  lightbox.classList.add("is-open");
});

closeModal.addEventListener("click", removeLightbox);
modalOverlay.addEventListener("click", removeLightbox);
function removeLightbox() {
  lightbox.classList.remove("is-open");
  img.src = "";
  img.alt = "";
}
