(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{!function(e){const t=document.createElement("h1");t.textContent="Example of collapsible-widget";const n=document.createElement("button");n.classList="collapsible",n.textContent="Read more...";const o=document.createElement("div");o.classList="content";const a=document.createElement("p");a.textContent="Collapsible content is minimally styled - we add only a bit of margin between the bar and content, \n                and the header adopts the default theme styles of the container within which it sits.\n                To provide a stronger visual connection between the collapsible header and content, add \n                the data-content-theme attribute to the wrapper and specify a theme swatch letter. \n                This applies the border and background color of the swatch to the content block and \n                changes the corner rounding to square off the bottom of the header and round the bottom \n                of the content block instead to visually group these elements.",o.appendChild(a),[t,n,o].forEach((e=>{document.body.appendChild(e)}));const l=document.getElementsByClassName("collapsible");let s;for(s=0;s<l.length;s++)l[s].addEventListener("click",(function(){this.classList.toggle("active");const e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=`${e.scrollHeight}px`}))}()}))})();