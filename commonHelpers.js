import{a as b,S as M,i as l}from"./assets/vendor-550cebad.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const v=document.querySelector(".form"),E=document.querySelector("#text-search"),i=document.querySelector(".gallery");async function p(e,o,r){return e=encodeURIComponent(e),i.innerHTML='<div class="loader"></div>',(await b.get("https://pixabay.com/api/",{params:{key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:r}})).data}const S={captionsData:"alt"};let y=new M(".gallery a",S);y.on("show.simplelightbox",function(){});y.refresh();function L(e){const o=e.map(r=>`<li class="gallery-item">
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
`).join("");i.insertAdjacentHTML("beforeend",o)}function H(){const e=`<p class= "end-message">"We're sorry, but you've reached the end of search results."</p>`;i.insertAdjacentHTML("afterend",e)}const g=document.querySelector(".load-more-btn"),w=document.querySelector(".loader");function m(){return w.classList.add("hidden")}function h(){return w.classList.remove("hidden")}function R(){g.style.display="block"}function a(){g.style.display="none"}function q(){const e=document.querySelector(".end-message");e&&e.remove()}let c="",n=1;const d=15;m();a();v.addEventListener("submit",$);async function $(e){if(e.preventDefault(),c=E.value.trim(),n=1,i.innerHTML="",c===""){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a();return}q(),h();try{const o=await p(c,n,d),r=o.totalHits;if(o.hits.length===0){i.innerHTML="",l.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a();return}else L(o.hits),R();d*n>=r&&a()}catch{l.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}finally{m()}}g.addEventListener("click",async()=>{n+=1,h();try{const e=await p(c,n,d),o=e.totalHits;L(e.hits),h(),d*n>=o&&(a(),H());const r=i.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"})}catch(e){console.error("Error fetching more images:",e),l.error({title:"Error",message:`Error fetching more images: ${e}`})}finally{m()}});
//# sourceMappingURL=commonHelpers.js.map
