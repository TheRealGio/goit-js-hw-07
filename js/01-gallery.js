import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleyDiv = document.querySelector(".gallery");

galleryItems.map(({ preview, original, description }) => {
  galleyDiv.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item"><a class="gallery__link" href="${original}"><img loading="lazy" class="gallery__image" data-src="${original}" alt="${description}" src="${preview}""/></a></div>`
  );
});

const onPictureClick = (event) => {
  event.preventDefault();
  const picSource = event.target.dataset.src;
  const modal = basicLightbox.create(
    `<img src="${picSource}" width="800" height="600">`
  );

  modal.show();
};

galleyDiv.addEventListener("click", onPictureClick);
