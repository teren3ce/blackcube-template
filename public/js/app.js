$(function () {

    $(".action-nav a").click(function (e) {
        e.preventDefault();
        if ($(".pro-section").hasClass("active")) {
            $(".pro-section").removeClass("active");
            $(".service-section").addClass("active");
        } else {
            $(".pro-section").addClass("active");
            $(".service-section").removeClass("active");
        }
    })

    $(".input-video .content").click(function (e) {
        e.preventDefault();
        $(".input-video").addClass("uploaded");
    })

    $(".input-video .thumbnail .remove-vid").click(function (e) {
        e.preventDefault();
        $(".input-video").removeClass("uploaded");
    })

    $(".dark-modal").hide();
    $(".dark-modal .close-modal").click(function () {
        $(".dark-modal").fadeOut();
    })

    $(".page-form").submit(function (e) {
        e.preventDefault();
        $(".dark-modal").fadeIn();
    })
});