import axios from 'axios';

export const formRef = document.querySelector('.form');
export const inputRef = document.querySelector('#text-search');
export const galleryRef = document.querySelector('.gallery');
export let queryInput;

export async function fetchImg(queryInput, page, perPage) {
  queryInput = encodeURIComponent(queryInput);

  const response = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: '42941180-7fae3d0b9e1a356f3d7e2df26',
      q: queryInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: perPage,
    },
  });

  return response.data;
}
