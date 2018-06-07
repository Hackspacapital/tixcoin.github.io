var doc = document;
var lang = doc.querySelector('.header .top .language');
var menu = doc.querySelector('.header .top .hamburger');
var menuBack = doc.querySelector('.menu-back');
var langBack = doc.querySelector('.lang-back');
function showLang() {
    var langItem = doc.querySelectorAll('.header .top .language div');
    if (lang.style.height !== '30px') {
        lang.style.height = '30px';
        langBack.style.display = 'none';
    } else {
        height = langItem.length * 30;
        lang.style.height = height + 'px';
        langBack.style.display = 'block';
    }
}
function showMenu() {
    var bord = doc.querySelector('.header .top .links');
    if (bord.style.left === '-20px') {
        bord.style.left = '-350px';
        menuBack.style.display = 'none';
    } else {
        bord.style.left = '-20px';
        menuBack.style.display = 'block';
    }
};
menu.onclick = function () {
    showMenu();
};
menuBack.onclick = function () {
    showMenu();
};
langBack.onclick = function () {
    showLang();
};
function setCookie(name, value) {
    var date = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);
    doc.cookie = name + '=' + value + '; path=/; expires=' + date;
}