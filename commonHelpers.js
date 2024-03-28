import{a as y,S as L,i as c}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const w=document.querySelector(".form"),b=document.querySelector("#text-search"),a=document.querySelector(".gallery");async function M(t,r,s){return t=encodeURIComponent(t),a.innerHTML='<div class="loader"></div>',(await y.get("https://pixabay.com/api/",{params:{key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s}})).data}function v(t){a.innerHTML="";const r=images.map(e=>`<li class="gallery-item">
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
`).join("");a.insertAdjacentHTML("beforeend",r);const s={captionsData:"alt"};let n=new L(".gallery a",s);n.on("show.simplelightbox",function(){}),n.refresh()}const h=document.querySelector(".load-more-btn"),m=document.querySelector(".loader");function g(){return m.classList.add("hidden")}function p(){return m.classList.remove("hidden")}function S(){h.style.display="block"}function l(){h.style.display="none"}function E(){const t=document.querySelector(".end-message");t&&t.remove()}let d="",i=1;const f=15;g();l();w.addEventListener("submit",H);async function H(t){if(t.preventDefault(),d=b.value.trim(),i=1,a.innerHTML="",d===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}E(),p();try{const r=await M(d,i,f),s=r.totalHits;if(r.hits.length===0){a.innerHTML="",c.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}else console.log(r.hits),console.log(v(r.hits)),S();f*i>=s&&l()}catch{c.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}finally{g()}}h.addEventListener("click",async()=>{try{loadMoreBtn&&(i+=1);const r=(await fetchImages(d,i,f)).totalHits;p(),f*i>=r&&l();const s=a.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*3,behavior:"smooth"})}catch(t){console.error("Error fetching more images:",t),c.error({title:"Error",message:`Error fetching more images: ${t}`})}finally{g()}});
//# sourceMappingURL=commonHelpers.js.map
