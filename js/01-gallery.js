import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleryCards = createGalaryCards(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryCards)

galleryEl.addEventListener('click', createClickImg)

function createGalaryCards(galleryItems) {
    return galleryItems.map(({description,original,preview}) =>{
        return `   
<div class="gallery__item">
  <a class="gallery__link" href=""${original}"">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    }).join('');   
}

function createClickImg(e) {
    e.preventDefault();
     const originalEl = e.target.dataset.source;
     const altEl = e.target.alt;
    console.log(originalEl);

    const instance = basicLightbox.create(`
    <div class="modal">
    <img
    src="${originalEl}"
    alt="${altEl}"
      />
    </div>
`)
instance.show()

galleryEl.addEventListener('keydown', creatKeydownEscape);

function creatKeydownEscape(e) {
  if (e.code === "Escape") {
   instance.close()
  }
}
}

