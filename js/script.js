(function(b){b.addEventListener("DOMContentLoaded",function(){let k="Stycze\u0144 Luty Marzec Kwiecie\u0144 Maj Czerwiec Lipiec Sierpie\u0144 Wrzesie\u0144 Pa\u017adziernik Listopad Grudzie\u0144".split(" "),l=b.querySelector("#current_date"),m=b.querySelector(".sh-side-options-item.sh-accent-color"),g=b.querySelector(".sh-side-options-item.sh-accent-color .sh-side-options-hover"),h=b.querySelector("#header-icon-search .icon-search"),n=b.querySelector(".search-close"),d=b.querySelector("#search-wrapper"),e=b.querySelector("#search-wrapper input"),a=b.documentElement,f=!0,c=!0;function time(){let a=new Date,b=a.getFullYear(),c=("0"+a.getDate()).slice(-2),d=a.getMonth();l.innerHTML=k[d]+" "+c+", "+b;setTimeout(time,1E3)};time();m.addEventListener("click",function(){f?(a.style.setProperty("--body-white","#141414"),a.style.setProperty("--black","#FFF"),a.style.setProperty("--black3","#ababab"),a.style.setProperty("--black1","#040404"),a.style.setProperty("--news-holder","#d4d4d4"),a.style.setProperty("--selection-background", "#FFF"),a.style.setProperty("--selection-color", "#141414"),g.innerHTML="Jasny motyw",f=!1):(a.style.setProperty("--body-white","#fff"),a.style.setProperty("--black","#000"),a.style.setProperty("--black3","#393939"),a.style.setProperty("--black1","#111"),a.style.setProperty("--news-holder","#f8f8f8"),a.style.setProperty("--selection-background", "#141414"),a.style.setProperty("--selection-color", "#FFF"),g.innerHTML="Ciemny motyw",f=!0)});h.addEventListener("click",function(){c?(this.classList.add("change"),d.classList.add("serach-wrapper-visible"),e.classList.add("input-transition"),c=!1):(this.classList.remove("change"),d.classList.remove("serach-wrapper-visible"),e.classList.remove("input-transition"),c=!0)});n.addEventListener("click",function(){c?c=!0:(h.classList.remove("change"),d.classList.remove("serach-wrapper-visible"),e.classList.remove("input-transition"),c=!0)})})})(document);