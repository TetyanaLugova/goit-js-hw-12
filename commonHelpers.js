import{a as w,S as b,i as c}from"./assets/vendor-550cebad.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const M=document.querySelector(".form"),v=document.querySelector("#text-search"),n=document.querySelector(".gallery");async function m(r,t,s){return r=encodeURIComponent(r),n.innerHTML='<div class="loader"></div>',(await w.get("https://pixabay.com/api/",{params:{key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}})).data}function p(r){n.innerHTML="";const t=r.map(e=>`<li class="gallery-item">
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
`).join("");n.insertAdjacentHTML("beforeend",t);const s={captionsData:"alt"};let i=new b(".gallery a",s);i.on("show.simplelightbox",function(){}),i.refresh()}function E(){const r=`<p class= "end-message">"We're sorry, but you've reached the end of search results."</p>`;n.insertAdjacentHTML("afterend",r)}const f=document.querySelector(".load-more-btn"),y=document.querySelector(".loader");function g(){return y.classList.add("hidden")}function L(){return y.classList.remove("hidden")}function S(){f.style.display="block"}function l(){f.style.display="none"}function H(){const r=document.querySelector(".end-message");r&&r.remove()}let d="",a=1;const u=15;g();l();M.addEventListener("submit",R);async function R(r){if(r.preventDefault(),d=v.value.trim(),a=1,n.innerHTML="",d===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}H(),L();try{const t=await m(d,a,u),s=t.totalHits;if(t.hits.length===0){n.innerHTML="",c.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}else console.log(t.hits),console.log(p(t.hits)),S();u*a>=s&&l()}catch{c.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}finally{g()}}f.addEventListener("click",async()=>{try{f&&(a+=1);const r=await m(d,a,u),t=r.totalHits;p(r.hits),L(),u*a>=t&&(l(),E());const s=n.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*3,behavior:"smooth"})}catch(r){console.error("Error fetching more images:",r),c.error({title:"Error",message:`Error fetching more images: ${r}`})}finally{g()}});
//# sourceMappingURL=commonHelpers.js.map
