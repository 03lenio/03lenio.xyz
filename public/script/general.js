function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function back() {
    var fadeoutElement = document.getElementById("fadeout");
    fadeoutElement.style.display = "block";
    setTimeout(function () {
        history.back();
    }, 500);
}

function goTo(href) {
    var fadeoutElement = document.getElementById("fadeout");
    fadeoutElement.style.display = "block";
    setTimeout(function () {
        window.location.href = href;
    }, 500);
}
