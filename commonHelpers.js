import{a as M,S as b,i as c}from"./assets/vendor-550cebad.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const f of e.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const v=document.querySelector(".form"),m=document.querySelector("#text-search"),n=document.querySelector(".gallery");async function E(r,o,s){return r=encodeURIComponent(r),n.innerHTML='<div class="loader"></div>',(await M.get("https://pixabay.com/api/",{params:{key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s}})).data}function p(r){n.innerHTML="";const o=r.hits;o.length===0&&iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const s=o.map(e=>`<li class="gallery-item">
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
`).join("");n.insertAdjacentHTML("beforeend",s);const i={captionsData:"alt"};let t=new b(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}function y(){const r=`<p class= "end-message">"We're sorry, but you've reached the end of search results."</p>`;n.insertAdjacentHTML("afterend",r)}const h=document.querySelector(".load-more-btn"),L=document.querySelector(".loader");function g(){return L.classList.add("hidden")}function w(){return L.classList.remove("hidden")}function S(){h.style.display="block"}function l(){h.style.display="none"}function H(){const r=document.querySelector(".end-message");r&&r.remove()}let d="",a=1;const u=15;g();l();v.addEventListener("submit",q);async function q(r){if(r.preventDefault(),d=m.value.trim(),a=1,n.innerHTML="",d===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}H(),w();try{const o=await E(d,a,u),s=o.totalHits;if(o.hits.length===0){n.innerHTML="",c.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}else p(o.hits),m.value="",S();u*a>=s&&(l(),y())}catch{c.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}finally{g()}}h.addEventListener("click",async()=>{try{loadMoreBtn&&(a+=1);const r=await fetchImages(d,a,u),o=r.totalHits;p(r.hits),w(),u*a>=o&&(l(),y());const s=n.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*3,behavior:"smooth"})}catch(r){console.error("Error fetching more images:",r),c.error({title:"Error",message:`Error fetching more images: ${r}`})}finally{g()}});
//# sourceMappingURL=commonHelpers.js.map
