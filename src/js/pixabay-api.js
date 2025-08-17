import axios, { Axios } from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '51662692-15f66b8f148fe09f1ff22625f',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
  }
});


export function getImagesByQuery(query){
    
    return axiosInstance.get('', {
        params: {q: query}
    }).then(response => response.data.hits)
}

