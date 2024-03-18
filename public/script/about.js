if (getCookie("darkModeEnabled") == "1") {
    toggleDarkMode();
}

function toggleDarkMode() {
    if (document.getElementById("fadein") != null) {
        document.getElementById("fadein").classList.toggle("fadein-dark");
    }
    if (document.getElementById("fadeout") != null) {
        document.getElementById("fadeout").classList.toggle("fadeout-dark");
    }
    if (document.getElementsByClassName("tooltiptext")[0] != null) {
        document.getElementsByClassName("tooltiptext")[0].classList.toggle("content-dark");
    }
    document.getElementById("aboutTextArea").classList.toggle("about-dark");
    document.getElementsByTagName("footer")[0].classList.toggle("content-dark");
    document.getElementById("content").classList.toggle("content-dark");
    document.body.classList.toggle("body-dark");
}

//Type Writer
function typeWriter(text, i, textarea) {
    if (i < text.length) {
        textarea.val(textarea.val() + text.charAt(i));
        i++;
        setTimeout(function () {
            typeWriter(text, i, textarea);
        }, 50);
    }
}

var textToType =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
$(document).ready(function () {
    $('.title-container').hover(function() {
        $(".tooltiptext").css("opacity", "1");
        $('.tooltiptext').addClass('active');
      }, function() {
        $(".tooltiptext").css("opacity", "0");
        setTimeout(function() {
            $('.tooltiptext').removeClass('active');
          }, 300);
      });

    var textarea = $("#aboutTextArea");
    textarea.val("");
    typeWriter(textToType, 0, textarea);
});

