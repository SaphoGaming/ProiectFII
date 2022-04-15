const parallax = document.getElementById('parallax');

const about = document.getElementById('about');

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})


about.addEventListener("click", function() {
    let percentage = 100;
    let offset = window.innerHeight / 100 * percentage;
        window.scrollTo({
            top: offset,
            left: 0,
            behavior: 'smooth'
        });
})