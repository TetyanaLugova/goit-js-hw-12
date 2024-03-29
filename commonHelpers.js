import{a as w,S as b,i as l}from"./assets/vendor-550cebad.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const M=document.querySelector(".form"),v=document.querySelector("#text-search"),a=document.querySelector(".gallery");async function g(e,o,r){return e=encodeURIComponent(e),a.innerHTML='<div class="loader"></div>',(await w.get("https://pixabay.com/api/",{params:{key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:r}})).data}const E=new b(".gallery a",{captionsData:"alt",captionDelay:250});E.refresh();function y(e){const o=e.map(r=>`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      data-source ="${r.largeImageURL}"
      alt="${r.tags}"
      width=360px
      height=200px
    />
    <ul class="gallery-description">
          <li><h3>Likes</h3><p>${r.likes}</p>
          </li>
          <li><h3>Views</h3><p>${r.views}</p>
            </li>
            <li><h3>Comments</h3><p>${r.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${r.downloads}</p>
                </li>
          </ul>
  </a>
</li>
`).join("");a.insertAdjacentHTML("beforeend",o)}function S(){const e=`<p class= "end-message">"We're sorry, but you've reached the end of search results."</p>`;a.insertAdjacentHTML("afterend",e)}const m=document.querySelector(".load-more-btn"),L=document.querySelector(".loader");function p(){return L.classList.add("hidden")}function h(){return L.classList.remove("hidden")}function H(){m.style.display="block"}function i(){m.style.display="none"}function R(){const e=document.querySelector(".end-message");e&&e.remove()}let c="",n=1;const d=15;p();i();M.addEventListener("submit",q);async function q(e){if(e.preventDefault(),c=v.value.trim(),n=1,a.innerHTML="",c===""){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i();return}R(),h();try{const o=await g(c,n,d),r=o.totalHits;if(o.hits.length===0){a.innerHTML="",l.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i();return}else y(o.hits),H();d*n>=r&&i()}catch{l.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}finally{p()}}m.addEventListener("click",async()=>{n+=1,h();try{const e=await g(c,n,d),o=e.totalHits;y(e.hits),h(),d*n>=o&&(i(),S());const r=a.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"})}catch(e){console.error("Error fetching more images:",e),l.error({title:"Error",message:`Error fetching more images: ${e}`})}finally{p()}});
//# sourceMappingURL=commonHelpers.js.map
