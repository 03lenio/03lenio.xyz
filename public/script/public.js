darkModeEnabled = false;
if (getCookie("darkModeEnabled") == "1") {
    if(darkModeEnabled) {
        document.getElementById("titleTooltip").textContent = "Go Dark";
    } else {
        document.getElementById("titleTooltip").textContent = "Go Bright";
    }
    toggleDarkMode();
}

function toggleDarkMode() {
    document.getElementById("loader-wrapper").classList.toggle("loader-wrapper-dark");
    if (document.getElementById("fadein") != null) {
        document.getElementById("fadein").classList.toggle("fadein-dark");
    }
    if (document.getElementById("fadeout") != null) {
        document.getElementById("fadeout").classList.toggle("fadeout-dark");
    }
    document.getElementsByClassName("loader")[0].classList.toggle("loader-dark");
    document.getElementsByTagName("footer")[0].classList.toggle("content-dark");
    document.getElementById("content").classList.toggle("content-dark");
    document.body.classList.toggle("body-dark");
    document.getElementsByClassName("font-outer")[0].classList.toggle("font-outer-dark");
    if(darkModeEnabled) {
        document.getElementById("titleTooltip").textContent = "Go Dark";
    } else {
        document.getElementById("titleTooltip").textContent = "Go Bright";
    }
    darkModeEnabled = !darkModeEnabled;
    updateDarkModeCookie();
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function updateDarkModeCookie() {
    setCookie("darkModeEnabled", darkModeEnabled ? "1" : "0", 365);
}
