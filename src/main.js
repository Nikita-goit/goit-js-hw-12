// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, hideLoadMoreButton, showLoadMoreButton } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { createMoreGallery } from "./js/render-functions";
import { smoothScroll } from "./js/render-functions";


const form = document.querySelector('.form')
const searchText = document.querySelector('[name="search-text"]')
const buttonLoadMore = document.querySelector('.button-js')
const per_page = 15;

let totalHitsValue = ''
let page = 1;
let searchTextValue = '';





form.addEventListener('submit', (e)=>{
    e.preventDefault();
    searchTextValue = searchText.value.trim()
    
    console.log(searchText.value)
 if(searchText.value.trim() === ''){
          iziToast.error({
                message: 'enter text, please!',
            })  
          return
        }
    clearGallery()
    showLoader()
    page = 1;
    async function getImagesFunction(searchTextValue, page) {
      try {
        const {hits, totalHits} = await getImagesByQuery(searchTextValue, page)
        const totalPages = Math.ceil(totalHits / per_page)
        if (hits.length === 0){
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            }) 
            hideLoadMoreButton()
            return
            // ПЕРЕВІРКА PAGE
        } else if (page >= totalPages){
          iziToast.show({
          message: 'Were sorry, but youve reached the end of search results.'
          })
          hideLoadMoreButton()
          return
          }
        createGallery(hits)
        showLoadMoreButton()
        }
      catch(err){
      iziToast.error({
        message: 'Please try again later'
      })
      console.error(err)
    }
      finally{
      hideLoader()
    }
}
getImagesFunction(searchTextValue, page);

});

  



buttonLoadMore.addEventListener('click', ()=>{

  
  hideLoadMoreButton()
  showLoader()
  searchTextValue = searchText.value.trim()
  getImagesByQuery(searchTextValue, ++page)
  .then(({hits, totalHits}) =>{
    const totalPages = Math.ceil(totalHits / per_page) 
    if (page >= totalPages){
    iziToast.show({
      message: 'Were sorry, but youve reached the end of search results.'
    })
    hideLoadMoreButton()
    return
  }
    createMoreGallery(hits)
    smoothScroll()
    showLoadMoreButton()
    
    
  })
  .catch((error)=>{
  console.error(error)
})
.finally(()=>{
hideLoader()
})
})


