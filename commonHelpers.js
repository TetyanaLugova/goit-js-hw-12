import{a as L,S as w,i as c}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const b=document.querySelector(".form"),M=document.querySelector("#text-search"),i=document.querySelector(".gallery");async function g(t,r,s){return t=encodeURIComponent(t),(await L.get("https://pixabay.com/api/",{params:{key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s}})).data}function p(t){const r=t.map(e=>`<li class="gallery-item">
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
`).join("");i.insertAdjacentHTML("beforeend",r);const s={captionsData:"alt"};let n=new w(".gallery a",s);n.on("show.simplelightbox",function(){}),n.refresh()}function v(){const t=`<p class= "end-message">"We're sorry, but you've reached the end of search results."</p>`;i.insertAdjacentHTML("afterend",t)}const m=document.querySelector(".load-more-btn"),u=document.querySelector(".loader");function y(){return u.classList.add("hidden")}function E(){return u.classList.remove("hidden")}function S(){m.style.display="block"}function l(){m.style.display="none"}function H(){const t=document.querySelector(".end-message");t&&t.remove()}let d="",a=1;const f=15;y();l();b.addEventListener("submit",R);async function R(t){if(t.preventDefault(),d=M.value.trim(),a=1,i.innerHTML="",d===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}H(),E();try{const r=await g(d,a,f),s=r.totalHits;if(i.innerHTML="",r.hits.length===0){i.innerHTML="",c.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}else p(r.hits),S();f*a>=s&&l()}catch{c.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}finally{y()}}m.addEventListener("click",async()=>{a+=1;try{u.classList.remove("hidden");const t=await g(d,a,f),r=t.totalHits;p(t.hits),f*a>=r&&(l(),v());const s=i.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*3,behavior:"smooth"})}catch(t){console.error("Error fetching more images:",t),c.error({title:"Error",message:`Error fetching more images: ${t}`})}finally{u.classList.add("hidden")}});
//# sourceMappingURL=commonHelpers.js.map
