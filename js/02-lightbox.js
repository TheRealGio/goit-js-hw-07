import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleyDiv = document.querySelector(".gallery");

galleryItems.map(({ preview, original, description }) => {
  galleyDiv.insertAdjacentHTML(
    "beforeend",
    `<li><a class="gallery__link" href="${original}"><img loading="lazy" class="gallery__image" data-src="${original}" alt="${description}" src="${preview}""/></a></li>`
  );
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});
