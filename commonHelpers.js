import{a as M,S as b,i as l}from"./assets/vendor-550cebad.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const f of e.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const E=document.querySelector(".form"),h=document.querySelector("#text-search"),n=document.querySelector(".gallery");async function S(t,o,s){return(await M.get("https://pixabay.com/api/",{params:{key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s}})).data}function g(t){n.innerHTML="";const o=t.hits;o.length===0&&iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const s=o.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source ="${e.largeImageURL}"
      alt="${e.tags}"
      width=360px
      height=200px
    />
    <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
  </a>
</li>
`).join("");n.insertAdjacentHTML("beforeend",s);const a={captionsData:"alt"};let r=new b(".gallery a",a);r.on("show.simplelightbox",function(){}),r.refresh()}function m(){const t=`<p class= "end-message">"We're sorry, but you've reached the end of search results."</p>`;n.insertAdjacentHTML("afterend",t)}const p=document.querySelector(".load-more-btn"),y=document.querySelector(".loader");function L(){return y.classList.add("hidden")}function w(){return y.classList.remove("hidden")}function q(){p.style.display="block"}function c(){p.style.display="none"}function v(){const t=document.querySelector(".end-message");t&&t.remove()}let d="",i=1;const u=15;E.addEventListener("submit",H);async function H(t){if(t.preventDefault(),d=h.value.trim(),i=1,n.innerHTML="",d===""){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}v(),w();try{const o=await S(d,i,u),s=o.totalHits;if(o.hits.length===0){n.innerHTML="",l.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}else g(o.hits),h.value="",q();u*i>=s&&(c(),m())}catch{l.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}finally{L()}}loadMoreBtn.addEventListener("click",async()=>{try{loadMoreBtn&&(pageCounter+=1);const t=await fetchImages(d,i,u),o=t.totalHits;g(t.hits),w(),u*i>=o&&(c(),m());const s=n.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*3,behavior:"smooth"})}catch(t){console.error("Error fetching more images:",t),l.error({title:"Error",message:`Error fetching more images: ${t}`})}finally{L()}});
//# sourceMappingURL=commonHelpers.js.map
