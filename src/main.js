import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { formRef, inputRef, galleryRef, fetchImg } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions.js";
import { hideLoader, showLoader, showLoadMoreBtn, hideLoadMoreBtn, hideEndOfCollectionMessage, loadMoreBtnRef } from "./js/loaderBtnFunction";
let queryInput = '';
let page = 1;
const perPage = 15;
hideLoader();
hideLoadMoreBtn();
formRef.addEventListener("submit", renderImg);
async function renderImg(event){
    event.preventDefault();
    queryInput = inputRef.value.trim();
    page = 1;
    galleryRef.innerHTML = '';
    if (queryInput === "") {
        iziToast.error({
            title: 'Error',
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
        hideLoadMoreBtn();
    return;
    }
    hideEndOfCollectionMessage();
    showLoader();
    try {
        const response = await fetchImg(queryInput, page, perPage);
        const totalHits = response.totalHits;
         if (response.hits.length === 0) {
      galleryRef.innerHTML = '';
      iziToast.info({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoadMoreBtn();
      return;
    }
     else {
       console.log(response.hits);
    console.log(createMarkup(response.hits))
      showLoadMoreBtn();
    }
    if (perPage * page >= totalHits) {
      hideLoadMoreBtn();
        }
    }
    catch(error) {
            iziToast.error({
                title: 'Error',
                message: "Sorry, an error occurred while fetching images. Please try again later!",
            });
        } finally {
    hideLoader();
        };
    };
    loadMoreBtnRef.addEventListener('click', async () => {
  try {
    if (loadMoreBtn) {
      page += 1;
    }
    const response = await fetchImages(queryInput, page, perPage);
    const totalHits = response.totalHits;
    showLoader();
    if (perPage * page >= totalHits) {
      hideLoadMoreBtn();
    }
    const galleryCardHeight =
      galleryRef.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({ top: galleryCardHeight * 3, behavior: 'smooth' });
  } catch (error) {
    console.error('Error fetching more images:', error);
    iziToast.error({
      title: 'Error',
      message: `Error fetching more images: ${error}`,
    });
  } finally {
    hideLoader();
  }
});