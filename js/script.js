function langSet(e){for(var n=document.getElementsByClassName("langCng"),t=0;t<n.length;t++)n[t].getAttribute("lang")==e?n[t].style.display="":n[t].style.display="none";setLangCookie(e)}function setLangCookie(e){document.cookie="selectedLang="+e+"; path=/"}function getLangFromCookie(){return document.cookie.replace(/(?:(?:^|.*;\s*)selectedLang\s*=\s*([^;]*).*$)|^.*$/,"$1")||null}$(function(){var e=$(".header").outerHeight();$('a[href^="#"]').on("click",function(){var n=$(this).attr("href"),t=$("#"==n||""==n?"html":n).offset().top-e;return $("html, body").animate({scrollTop:t},300,"swing"),!1}),$("#js-page-top").on("click",function(){return $("body,html").animate({scrollTop:0},300),!1})}),window.onload=function(){var e=(navigator.browserLanguage||navigator.language||navigator.userLanguage).substr(0,2);langSet(getLangFromCookie()||e)};
