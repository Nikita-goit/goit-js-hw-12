import{a as S,S as h,i}from"./assets/vendor-BK_rxH-O.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const q=S.create({baseURL:"https://pixabay.com/api/",params:{key:"51662692-15f66b8f148fe09f1ff22625f",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}});async function g(e,a){try{const r=await q.get("",{params:{q:e,page:a}});return{hits:r.data.hits,totalHits:r.data.totalHits}}catch(r){console.error("помилка!",r)}}let l;function $(e){const a=document.querySelector(".gallery"),r=e.map(({webformatURL:o,largeImageURL:t,tags:s,likes:n,views:p,downloads:f,comments:y})=>`
    <a href="${t}" class="gallery_item elem-js">
      <img src="${o}" alt="${s}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${n}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${y}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${f}</span>
  </li>
</ul>
    </a>
  `).join("");a.innerHTML=r,l?l.refresh():l=new h(".gallery a")}function M(){const e=document.querySelector(".gallery");e.innerHTML=""}function L(){const e=document.querySelector(".loader");e?e.classList.remove("is-not-active"):console.warn("Loader element not found")}function b(){const e=document.querySelector(".loader");e?e.classList.add("is-not-active"):console.warn("Loader element not found in hideLoader")}function v(){document.querySelector(".button-js").classList.remove("is-not-active")}function u(){document.querySelector(".button-js").classList.add("is-not-active")}function x(e){const a=document.querySelector(".gallery"),r=e.map(({webformatURL:o,largeImageURL:t,tags:s,likes:n,views:p,downloads:f,comments:y})=>`
    <a href="${t}" class="gallery_item">
      <img src="${o}" alt="${s}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${n}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${y}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${f}</span>
  </li>
</ul>
    </a>
  `).join("");a.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new h(".gallery a")}function j(){const e=document.querySelectorAll(".elem-js"),a=e[e.length-1];if(!a)return;const r=a.getBoundingClientRect().height;window.scrollBy({top:r,behavior:"smooth"})}const P=document.querySelector(".form"),c=document.querySelector('[name="search-text"]'),C=document.querySelector(".button-js"),w=15;let m=1,d="";P.addEventListener("submit",e=>{if(e.preventDefault(),d=c.value.trim(),console.log(c.value),c.value.trim()===""){i.error({message:"enter text, please!"});return}M(),L(),m=1;async function a(r,o){try{const{hits:t,totalHits:s}=await g(r,o),n=Math.ceil(s/w);if(t.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),u();return}else if(o>=n){i.show({message:"Were sorry, but youve reached the end of search results."}),u();return}$(t),v()}catch(t){i.error({message:"Please try again later"}),console.error(t)}finally{b()}}a(d,m)});C.addEventListener("click",()=>{u(),L(),d=c.value.trim(),g(d,++m).then(({hits:e,totalHits:a})=>{const r=Math.ceil(a/w);if(m>=r){i.show({message:"Were sorry, but youve reached the end of search results."}),u();return}x(e),j(),v()}).catch(e=>{console.error(e)}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
