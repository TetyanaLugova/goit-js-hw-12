import{a as m,S as p,i as l}from"./assets/vendor-550cebad.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const y=document.querySelector(".form"),d=document.querySelector("#text-search"),a=document.querySelector(".gallery");async function L(o,t,s){return(await m.get("https://pixabay.com/api/",{params:{key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}})).data}function w(o){a.innerHTML="";const t=o.hits;t.length===0&&iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const s=t.map(e=>`<li class="gallery-item">
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
`).join("");a.insertAdjacentHTML("beforeend",s);const n={captionsData:"alt"};let r=new p(".gallery a",n);r.on("show.simplelightbox",function(){}),r.refresh()}const g=document.querySelector(".load-more-btn"),b=document.querySelector(".loader");function S(){return b.classList.remove("hidden")}function q(){iziToast.error({title:"Error",message:"We're sorry, but you've reached the end of search results."})}function M(){g.style.display="block"}function c(){g.style.display="none"}function v(){const o=document.querySelector(".end-message");o&&o.remove()}let u="",f=1;const h=15;y.addEventListener("submit",E);async function E(o){if(o.preventDefault(),u=d.value.trim(),f=1,a.innerHTML="",u===""){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}v(),S();try{const t=await L(u,f,h),s=t.totalHits;if(t.hits.length===0){a.innerHTML="",l.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}else w(t.hits),d.value="",M();h*pageCounter>=s&&(c(),q())}catch{l.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}}
//# sourceMappingURL=commonHelpers.js.map
