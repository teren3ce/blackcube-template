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

    // $(".input-video .content").click(function (e) {
    //     e.preventDefault();
    //     $(".input-video").addClass("uploaded");
    // })



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
        var form = $(this).serialize();

        console.log(form);
        $.post("/professional_answers/new", form).then(function (e) {
            $(".dark-modal").fadeIn();
        }).catch(function (e) {
            M.toast({
                html: 'Unable to submit your survey, please try again'
            })
        })
    })
});