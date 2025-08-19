import{a as v,S as g,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const $=v.create({baseURL:"https://pixabay.com/api/",params:{key:"51662692-15f66b8f148fe09f1ff22625f",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}});async function h(e,s){try{const n=await $.get("",{params:{q:e,page:s}});return{hits:n.data.hits,totalHits:n.data.totalHits}}catch(n){console.error("помилка!",n)}}let i;function q(e){const s=document.querySelector(".gallery"),n=e.map(({webformatURL:o,largeImageURL:t,tags:a,likes:r,views:m,downloads:f,comments:p})=>`
    <a href="${t}" class="gallery_item elem-js">
      <img src="${o}" alt="${a}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${r}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${m}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${f}</span>
  </li>
</ul>
    </a>
  `).join("");s.innerHTML=n,i?i.refresh():i=new g(".gallery a")}function x(){const e=document.querySelector(".gallery");e.innerHTML=""}function L(){const e=document.querySelector(".loader");e?e.classList.remove("is-not-active"):console.warn("Loader element not found")}function b(){const e=document.querySelector(".loader");e?e.classList.add("is-not-active"):console.warn("Loader element not found in hideLoader")}function w(){document.querySelector(".button-js").classList.remove("is-not-active")}function S(){document.querySelector(".button-js").classList.add("is-not-active")}function j(e){const s=document.querySelector(".gallery"),n=e.map(({webformatURL:o,largeImageURL:t,tags:a,likes:r,views:m,downloads:f,comments:p})=>`
    <a href="${t}" class="gallery_item">
      <img src="${o}" alt="${a}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${r}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${m}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${f}</span>
  </li>
</ul>
    </a>
  `).join("");s.insertAdjacentHTML("beforeend",n),i?i.refresh():i=new g(".gallery a")}function M(){const e=document.querySelectorAll(".elem-js"),s=e[e.length-1];if(!s)return;const n=s.getBoundingClientRect().height;window.scrollBy({top:n,behavior:"smooth"})}const H=document.querySelector(".form"),P=document.querySelector('[name="search-text"]'),C=document.querySelector(".button-js");let u="",d=1,y=0,c=0;H.addEventListener("submit",async e=>{if(e.preventDefault(),u=P.value.trim(),u===""){l.error({message:"Enter text, please!"});return}x(),d=1,c=0,S(),L();try{const{hits:s,totalHits:n}=await h(u,d);if(y=n,s.length===0){l.error({message:"Sorry, no images found. Please try again!"});return}q(s),c+=s.length,c<y?w():l.info({message:"We're sorry, but you've reached the end of results."})}catch(s){l.error({message:"Please try again later"}),console.error(s)}finally{b()}});C.addEventListener("click",async()=>{d++,S(),L();try{const{hits:e}=await h(u,d);j(e),M(),c+=e.length,c<y?w():l.info({message:"We're sorry, but you've reached the end of results."})}catch(e){l.error({message:"Please try again later"}),console.error(e)}finally{b()}});
//# sourceMappingURL=index.js.map
