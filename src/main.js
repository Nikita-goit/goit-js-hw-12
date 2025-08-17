// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";

const form = document.querySelector('.form')
const searchText = document.querySelector('[name="search-text"]')

// document.addEventListener('DOMContentLoaded', () => {
//   showLoader()
// });
// window.addEventListener('load', () => {
//   hideLoader()
// });



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(searchText.value)
 if(searchText.value.trim() === ''){
          iziToast.error({
                message: 'enter text, please!',
            })  
          return
        }
        

    clearGallery()
    showLoader()


    getImagesByQuery(searchText.value.trim()).then(images => {
        if (images.length === 0){
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            }) 
            
        }
        
        createGallery(images)
    })
    .catch(err =>{
      iziToast.error({
        message: 'Please try again later'
      })
    })
    .finally(()=>{
      hideLoader()
    })
})