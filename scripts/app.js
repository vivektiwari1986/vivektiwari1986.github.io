!function(e){"use strict";function t(e,t){this.name=e,this.popularity=t,this.html="<div class='swiper-slide'><div class='name'>"+this.name+"</div><div class='pop'>Popularity:"+this.popularity+"</div></div>"}function r(e){this.list=[],this.popularityArr=[],this.totalPeople=e;for(var r=0;e>r;r++){var n=Math.floor(Math.random()*e+1);this.popularityArr.push(n);var i="Mr. "+Math.random().toString(36).substring(13);this.list.push(new t(i,n))}this.popularityArr.sort(a),this.getList=function(){return this.list},this.getFilteredList=function(e){var t=this.popularityArr[this.totalPeople-e];return this.list.filter(function(e){return e.popularity<t?!1:!0})}}function n(){new Swiper(".swiper-container",{pagination:".swiper-pagination",effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}})}function i(e){var t,r="<div class='swiper-container'><div class='swiper-wrapper'>";t=e?s.personList.getFilteredList(e):s.personList.getList();for(var n=0;n<t.length;n++)r+=t[n].html;return r+="</div></div>"}function a(e,t){return e-t}var o=e.querySelector("#app");o.displayInstalledToast=function(){e.querySelector("platinum-sw-cache").disabled||e.querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){}),window.addEventListener("WebComponentsReady",function(){}),addEventListener("paper-header-transform",function(t){var r=e.querySelector("#mainToolbar .app-name"),n=e.querySelector("#mainToolbar .middle-container"),i=e.querySelector("#mainToolbar .bottom-container"),a=t.detail,o=a.height-a.condensedHeight,s=Math.min(1,a.y/o),l=.5,c=Math.max(l,(o-a.y)/(o/(1-l))+l),p=1-s;Polymer.Base.transform("translate3d(0,"+100*s+"%,0)",n),Polymer.Base.transform("scale("+p+") translateZ(0)",i),Polymer.Base.transform("scale("+c+") translateZ(0)",r)}),o.onDataRouteClick=function(){var t=e.querySelector("#paperDrawerPanel");t.narrow&&t.closeDrawer()},o.scrollPageToTop=function(){e.getElementById("mainContainer").scrollTop=0};var s={};s.personList=new r(100),window.addEventListener("WebComponentsReady",function(t){e.getElementsByClassName("swiperInnerContainer")[0].insertAdjacentHTML("afterBegin",i()),setTimeout(function(){n()},500),e.querySelector("paper-slider").addEventListener("change",function(t){e.getElementsByClassName("swiper-container")[0].remove(),e.getElementsByClassName("swiperInnerContainer")[0].insertAdjacentHTML("afterBegin",i(t.target.value)),n()})})}(document);