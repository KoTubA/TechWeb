const u = document.URL;
const reg = /[^\/]*\.html/gi;
let l = u.match(reg);

document.addEventListener("DOMContentLoaded", function () {
    if (l == null) l = "index.html";
    const el = document.querySelectorAll('.button a[href="' + l + '"]');

    el.forEach(function (e) {
        e.classList.add('color-click-nav');
    });
});