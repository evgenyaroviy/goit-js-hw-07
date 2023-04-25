import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const galleryCard = createGalleryCard(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryCard);
galleryRef.addEventListener("click", onImageClick);

function createGalleryCard(gallery) {
    return gallery.map(({ description, preview, original }) => {
        return `
<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
            class="gallery__image image"
            src="${preview}" 
            data-src="${original}"
            alt="${description}">
        </a>
    </li>
    `;
    }).join('');
     
}

function blockStandartAction(event) {
    event.preventDefault();
}

function onImageClick(event) {
    blockStandartAction(event)

        if (event.target.nodeName !== "IMG") {
    return;
}
    const instance = basicLightbox.create(`
		<img src="${event.target.dataset.src}" width="800" height="600" >
	`)
    instance.show();

    galleryRef.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        instance.close();
        gallery.removeEventListener("click", onImageClick);
        gallery.addEventListener("click", onImageClick);
    }
})
}







