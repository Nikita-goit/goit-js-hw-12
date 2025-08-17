import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

let lightboxInstance;


// СТВОРЕННЯ РОЗМІТКИ
export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, downloads, comments}) => `
    <a href="${largeImageURL}" class="gallery_item elem-js">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${likes}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${views}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${comments}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${downloads}</span>
  </li>
</ul>
    </a>
  `).join('');

  galleryContainer.innerHTML = markup;

  if (!lightboxInstance) {
    lightboxInstance = new SimpleLightbox('.gallery a');
  } else {
    lightboxInstance.refresh();
  }}

  // ОЧИСТИТИ ГАЛЕРЕЮ
  export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = '';
}

// ПОКАЗАТИ ЛОАДЕР
export function showLoader(){
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('is-not-active');
  } else {
    console.warn('Loader element not found');
  }
}
// ЗХОВАТИ ЛОАДЕР
export function hideLoader(){
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('is-not-active');
  } else {
    console.warn('Loader element not found in hideLoader');
  }
}

// ПОКАЗАТИ КНОПКУ "MORE PAGE"
export function showLoadMoreButton(){
  const button = document.querySelector('.button-js')
  button.classList.remove('is-not-active')
}

// СХОВАТИ КНОПКУ "MORE PAGE"
export function hideLoadMoreButton(){
  const button = document.querySelector('.button-js')
  button.classList.add('is-not-active')
}

// ДОДАТИ ГАЛЕРЕЮ

export function createMoreGallery(images){


    const galleryContainer = document.querySelector('.gallery');
  
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, downloads, comments}) => `
    <a href="${largeImageURL}" class="gallery_item">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${likes}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${views}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${comments}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${downloads}</span>
  </li>
</ul>
    </a>
  `).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup)
  

  if (!lightboxInstance) {
    lightboxInstance = new SimpleLightbox('.gallery a');
  } else {
    lightboxInstance.refresh();
  }}


export function smoothScroll() {
  const elements = document.querySelectorAll('.elem-js');
  const lastElement = elements[elements.length - 1];
  if (!lastElement) return;

  // Висота останнього елемента
  const height = lastElement.getBoundingClientRect().height;

  // Прокрутка вниз на цю висоту
  window.scrollBy({
    top: height,
    behavior: 'smooth'
  });
}

