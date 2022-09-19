import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleryCards = createGalaryCards(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryCards)

function createGalaryCards(galleryItems) {
    return galleryItems.map(({description,original,preview}) =>{
        return `   
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
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

console.log(galleryItems);
console.log(galleryEl);
