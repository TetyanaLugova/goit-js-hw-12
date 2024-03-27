const loadMoreBtnRef = document.querySelector(".load-more-btn");
const loaderRef = document.querySelector(".loader");

export function hideLoader() {
  return loaderRef.classList.add('hidden');
};

export function showLoader() {
  return loaderRef.classList.remove('hidden');
};

export function showEndOfCollectionMessage() {
  iziToast.error({
    title: 'Error',
    message: "We're sorry, but you've reached the end of search results.",
  });
};

export function showLoadMoreBtn() {
  loadMoreBtnRef.style.display = 'block';
}

export function hideLoadMoreBtn() {
  loadMoreBtnRef.style.display = 'none';
}

export function hideEndOfCollectionMessage() {
  const endMessage = document.querySelector('.end-message');
  if (endMessage) {
    endMessage.remove();
  }
}