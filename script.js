/****  Sticky Navbar  ****/
$(document).ready(function () {
    $(window).on("scroll", function () {
        var t = $(".navigation");
        $(window).scrollTop() >= t.height() ? t.addClass("nav-scroll") : t.removeClass("nav-scroll")
    })
});