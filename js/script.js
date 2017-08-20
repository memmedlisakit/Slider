var prev = document.querySelector(".fa-chevron-left");
var next = document.querySelector(".fa-chevron-right");
var active = document.querySelector(".slider .active");

prev.addEventListener("click", prevslide);
next.addEventListener("click", nextslide);



function prevslide() {
    active.classList.remove("active");
    if (active.previousElementSibling == null) {
        var index = active.parentNode.childElementCount - 1;
        active.parentNode.children[index].classList.add("active");
        active = active.parentNode.children[index];
    } else {
        active.previousElementSibling.classList.add("active");
        active = active.previousElementSibling;
    }
}

function nextslide() {
    active.classList.remove("active");
    if (active.nextElementSibling == null) {
        active.parentNode.children[0].classList.add("active");
        active = active.parentNode.children[0];
    } else {
        active.nextElementSibling.classList.add("active");
        active = active.nextElementSibling;
    }
}
