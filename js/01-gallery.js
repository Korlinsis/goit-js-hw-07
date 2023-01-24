import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);


gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
gallery.addEventListener('click', onGalleryItemClick);

function createGalleryItemsMarkup (items) {
    return items.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    }).join('');
}

function onGalleryItemClick (e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
    `);

    instance.show();

    // Реалізація закриття модального вікна після натискання клавіші Escape.

    window.addEventListener('keydown', onEscPress);

    function onEscPress (e) {
        if (e.code === 'Escape') {
            window.removeEventListener('keydown', onEscPress);
            instance.close();
        }
    }
}







