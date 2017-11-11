function scrolled() {
    $(window).scrollTop() > $("#main-nav").height() ? ($("#main-nav").addClass("nav-bg"), $("#main-nav").removeClass("nav-bg-remove")) : ($("#main-nav").addClass("nav-bg-remove"), $("#main-nav").removeClass("nav-bg"))
}

function classOnSmaller() {
    $(window).width() < maxWindowForNav && $("#main-nav").addClass("nav-bg")
}
var maxWindowForNav = 575;
$(document).ready(function () {
    $(".carousel").carousel({
        interval: !1
    }), classOnSmaller()
}), $(window).width() > maxWindowForNav && $(window).scroll(function () {
    scrolled()
}), $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide")
});
