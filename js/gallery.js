import images from "./gallery-items.js";

const galleryContainer = document.querySelector('.js-gallery');
const ImageCardsmarkup = createImageCardsmarkup(images)

galleryContainer.insertAdjacentHTML('beforeend', ImageCardsmarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);
const ligthBox = document.querySelector('.js-lightbox');
const lightboxOriginalImg = document.querySelector('.lightbox__image');

function createImageCardsmarkup(images) {
  return images.map(({preview, original, description}) => {
    return `
   <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li> `;
  }).join('');
}
    
function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    ligthBox.classList.add("is-open");
    const linkOriginalImg = evt.target.dataset.source;
    lightboxOriginalImg.src = linkOriginalImg;
    
}

const closeButton = document.querySelector('.lightbox__button');
closeButton.addEventListener('click', onCloseButtonClick);
function onCloseButtonClick(evt) {
    ligthBox.classList.remove('is-open');
    lightboxOriginalImg.src = '';
}

const closeLightboxOverlay = document.querySelector('.lightbox__overlay');
closeLightboxOverlay.addEventListener('click', onCloseLightboxOverlayClick);
function onCloseLightboxOverlayClick(evt) {
    if (!evt.target.classList.contains('lightbox__overlay')) {
        return;
    }
    ligthBox.classList.remove('is-open');
    lightboxOriginalImg.src = '';
}




