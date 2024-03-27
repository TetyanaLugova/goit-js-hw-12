//
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { formRef, inputRef, galleryRef, fetchImg } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
import { hideLoader, showLoader, showEndOfCollectionMessage, showLoadMoreBtn, hideLoadMoreBtn, hideEndOfCollectionMessage } from "./js/loaderBtnFunction";

let queryInput = ''; 
let page = 1;
const perPage = 15;

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
    } else {
      createMarkup(response.hits);
      inputRef.value = '';
      showLoadMoreBtn();
    }
    if (perPage * pageCounter >= totalHits) {
      hideLoadMoreBtn();
      showEndOfCollectionMessage();
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
