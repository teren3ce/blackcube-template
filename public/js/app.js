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