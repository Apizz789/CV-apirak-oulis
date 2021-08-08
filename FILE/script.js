let box1 = document.getElementById("my")
window.addEventListener("scroll", function() {
    let value = window.scrollY;

    my.style.top = 50 + value * -0.5 + 'px';
})