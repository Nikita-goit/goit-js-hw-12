// Описаний у документації
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { 
  createGallery, 
  createMoreGallery,
  clearGallery,
  showLoadMoreButton, 
  hideLoadMoreButton, 
  showLoader, 
  hideLoader, 
  smoothScroll 
} from "./js/render-functions";

const form = document.querySelector('.form');
const searchText = document.querySelector('[name="search-text"]');
const buttonLoadMore = document.querySelector('.button-js');

const per_page = 15;
let searchTextValue = '';
let page = 1;
let totalHitsValue = 0;
let loadedImages = 0;

// --- ПОШУК ---
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  searchTextValue = searchText.value.trim();

  if (searchTextValue === '') {
    iziToast.error({ message: 'Enter text, please!' });
    return;
  }

  clearGallery();
  page = 1;
  loadedImages = 0;
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(searchTextValue, page);
    totalHitsValue = totalHits;

    if (hits.length === 0) {
      iziToast.error({
        message: 'Sorry, no images found. Please try again!'
      });
      return;
    }

    createGallery(hits);
    loadedImages += hits.length;

    if (loadedImages < totalHitsValue) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of results."
      });
    }

  } catch (err) {
    iziToast.error({ message: 'Please try again later' });
    console.error(err);
  } finally {
    hideLoader();
  }
});

// --- LOAD MORE ---
buttonLoadMore.addEventListener('click', async () => {
  page++;
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits } = await getImagesByQuery(searchTextValue, page);

    createMoreGallery(hits);
    smoothScroll();
    loadedImages += hits.length;

    if (loadedImages < totalHitsValue) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of results."
      });
    }

  } catch (err) {
    iziToast.error({ message: 'Please try again later' });
    console.error(err);
  } finally {
    hideLoader();
  }
});