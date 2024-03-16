
function toggleDarkMode() {
    document.getElementById("content").classList.toggle("content-dark");
    document.body.classList.toggle("body-dark");
    document.getElementsByClassName("font-outer")[0].classList.toggle("font-outer-dark")
    document.getElementsByTagName("footer")[0].classList.toggle("content-dark");
}