!function(){function e(e){var t=p.offsetHeight;if(d.className=e>t?"fix-sidebar":"",!k&&w){for(var n,r=0;r<w.length;r++){var i=w[r];if(i.offsetTop>e){n||(n=i);break}n=i}n&&o(n.id)}}function t(e){var t=document.createElement("li"),n=e.textContent.replace(/\(.*\)$/,"");return e.id=e.id.replace(/\(.*\)$/,"").replace(/\$/,""),t.innerHTML='<a class="section-link" data-scroll href="#'+e.id+'">'+n+"</a>",t}function n(e){for(var t=[],n=e.nextSibling;n&&"H2"!==n.tagName;)"H3"===n.tagName&&t.push(n),n=n.nextSibling;return t}function r(e,n){var r=document.createElement("ul");return n&&(r.className="menu-sub"),e.forEach(function(e){r.appendChild(t(e))}),r}function o(e){var t=h.querySelector(".section-link.active"),n="string"==typeof e?h.querySelector('.section-link[href="#'+e+'"]'):e;n!==t&&(t&&t.classList.remove("active"),n.classList.add("active"))}function i(e){var t=document.createElement("a");t.href="#"+e.id,t.setAttribute("data-scroll",""),e.parentNode.insertBefore(t,e),t.appendChild(e)}function c(e,t,n,r){return t+n*(e/=r)*e*e}function a(e){function t(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}var r=n(),o=0-r,i=0,a=20,e="undefined"==typeof e?500:e,l=function(){i+=a;var n=c(i,r,o,e);t(n),e>i&&x(l)};l()}function l(e){g.classList[e>1e3?"add":"remove"]("visible")}function u(){var t=f&&f.scrollTop||m.scrollTop;e(t),l(t)}var s=[].forEach,d=document.getElementById("main"),f=document.documentElement,m=document.body,p=document.getElementById("header"),h=document.querySelector(".sidebar"),v=document.querySelector(".content"),g=document.getElementById("toTop"),E=document.getElementById("mobile-bar"),y=E.querySelector(".menu-button");y.addEventListener("click",function(){h.classList.toggle("open")}),m.addEventListener("click",function(e){e.target===y||h.contains(e.target)||h.classList.remove("open")});var L=h.querySelector(".sidebar-link.current");if(L){var b,w=[];b=document.createElement("ul"),b.className="menu-sub",L.parentNode.appendChild(b);var T=v.querySelectorAll("h2");T.length?s.call(T,function(e){b.appendChild(t(e));var o=n(e);w.push(e),w.push.apply(w,o),o.length&&b.appendChild(r(o))}):(T=v.querySelectorAll("h3"),s.call(T,function(e){b.appendChild(t(e)),w.push(e)}));var k=!1;b.addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("section-link")&&(h.classList.remove("open"),o(e.target),k=!0,setTimeout(function(){k=!1},400))},!0),w.forEach(i),smoothScroll.init({speed:400,offset:window.innerWidth>720?40:58})}var x=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();g.addEventListener("click",function(e){e.preventDefault(),a(1e3)}),window.addEventListener("scroll",u),window.addEventListener("resize",u)}(),$(function(){"use strict";function e(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function t(t){var n=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),r=document.getElementById("local-search-input"),o=document.getElementById("local-search-result");$("input#local-search-input").keyup(function(e){27==e.keyCode&&($(this).val(""),o.innerHTML="")}),r.addEventListener("input",function(){var t="<ul>",r=this.value.trim();o.innerHTML="",r.length<=0||(r=r.toLowerCase().split(/[\s\-]+/),n.forEach(function(n){var o=!0,i=n.title.trim().toLowerCase(),c=n.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),a=n.url,l=-1,u=-1,s=-1;if(""!=i&&""!=c&&r.forEach(function(e,t){l=i.indexOf(e),u=c.indexOf(e),0>l&&0>u?o=!1:(0>u&&(u=0),0==t&&(s=u))}),o){var d=n.content.trim().replace(/<[^>]+>/g,"");if(!d.length)return;if(t+='<li><a href="'+a+'" class="search-result-title">'+e(i)+"</a>",s>=0){var f=s-100,m=s+100;0>f&&(f=0),0==f&&(m=200),m>d.length&&(m=d.length);var p=d.substring(f,m);r.forEach(function(e){var t=new RegExp(e,"gi");p=p.replace(t,"<code>"+e+"</code>")}),t+='<a class="search-result" href="'+a+'"><p>'+p+"...</p></a>"}t+="</li>"}}),t+="</ul>",o.innerHTML=t)})}$.ajax({url:"/search.xml",dataType:"xml",success:t})});