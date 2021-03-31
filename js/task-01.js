import gallery from './gallery-items.js'

const galleryList = document.querySelector('.js-gallery')
const galleryModal = document.querySelector('.js-lightbox');
const modalCloseBtn = document.querySelector('.lightbox__button');
const largePicture = document.querySelector('.lightbox__image');

gallery.forEach(el => {
    const listRef = `<li class="gallery__item">
<a
  class="gallery__link"
  href="${el.original}"
>
  <img
    class="gallery__image"
    src="${el.preview}"
    data-source="${el.original}"
    alt="${el.description}"
  />
</a>
</li>`

galleryList.insertAdjacentHTML('beforeend', listRef);
});



const makeMarkupModal = (evt)=>{
    evt.preventDefault();
    largePicture.src = evt.target.dataset.source;
    largePicture.alt = evt.target.alt;
    openModal();
}

const openModal = ()=> {
    galleryModal.classList.add('is-open');
}

const closeModal = ()=> {
    galleryModal.classList.remove('is-open');
    largePicture.src = "";
    largePicture.alt = "";
}


galleryList.addEventListener('click', makeMarkupModal);
modalCloseBtn.addEventListener('click', closeModal)





