import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);


gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
gallery.addEventListener('click', onGalleryItemClick);

function createGalleryItemsMarkup (items) {
    return items.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    }).join('');
}

function onGalleryItemClick (e) {
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
}

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});