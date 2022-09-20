import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleryCards = createGalaryCards(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryCards)

galleryEl.addEventListener('click', createClickImg)
// galleryEl.addEventListener('click', createModal)


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
    whiht="300"
   />
    </div>
`)
instance.show()
}






// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()