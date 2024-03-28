import{a as L,S as w,i as c}from"./assets/vendor-550cebad.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const b=document.querySelector(".form"),v=document.querySelector("#text-search"),a=document.querySelector(".gallery");async function m(r,t,s){return r=encodeURIComponent(r),a.innerHTML='<div class="loader"></div>',(await L.get("https://pixabay.com/api/",{params:{key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}})).data}function M(r){a.innerHTML="";const t=r.map(e=>`<li class="gallery-item">
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
`).join("");a.insertAdjacentHTML("beforeend",t);const s={captionsData:"alt"};let n=new w(".gallery a",s);n.on("show.simplelightbox",function(){}),n.refresh()}const f=document.querySelector(".load-more-btn"),p=document.querySelector(".loader");function g(){return p.classList.add("hidden")}function y(){return p.classList.remove("hidden")}function S(){f.style.display="block"}function l(){f.style.display="none"}function E(){const r=document.querySelector(".end-message");r&&r.remove()}let d="",i=1;const u=15;g();l();b.addEventListener("submit",H);async function H(r){if(r.preventDefault(),d=v.value.trim(),i=1,a.innerHTML="",d===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}E(),y();try{const t=await m(d,i,u),s=t.totalHits;if(t.hits.length===0){a.innerHTML="",c.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}else console.log(t.hits),console.log(M(t.hits)),S();u*i>=s&&l()}catch{c.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}finally{g()}}f.addEventListener("click",async()=>{try{f&&(i+=1);const t=(await m(d,i,u)).totalHits;y(),u*i>=t&&l();const s=a.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*3,behavior:"smooth"})}catch(r){console.error("Error fetching more images:",r),c.error({title:"Error",message:`Error fetching more images: ${r}`})}finally{g()}});
//# sourceMappingURL=commonHelpers.js.map
