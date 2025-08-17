import axios, { Axios } from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '51662692-15f66b8f148fe09f1ff22625f',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
   
    per_page: 15
  }
});



export async function getImagesByQuery(query, page){
  try{
 const response = await axiosInstance.get('', {
        params: {q: query, page}
    })
    return{
      hits: response.data.hits,
      totalHits: response.data.totalHits
    } 

} catch(error) {
  console.error("помилка!", error);
}
  }
 


