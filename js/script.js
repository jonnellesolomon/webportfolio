let hamburger = document.querySelector(".menu");
let menu = document.querySelector("#openMenu");
let close = document.querySelector(".closeMenu");

hamburger.addEventListener("click", 
    function displayMenu() {
        menu.style.display = "block";
});

close.addEventListener("click", 
    function closeMenu() {
        menu.style.display = "none";
});

function view(imgsrc) {
    viewwin = window.open(imgsrc,'viewwin', 'width=600,height=300'); 
 }