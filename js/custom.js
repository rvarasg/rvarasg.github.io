/*
	Rocket Internet by TEMPLATE STOCK
    templatestock.co @templatestock
*/

/* Header Full Screen */
$(document).ready(function() {
	$('#homeFullScreen').css({height:$(window).height(),width:$(window).width()});
	$(window).resize(function(){
        $('#homeFullScreen').css({height:$(window).height(),width:$(window).width()});
    });

});

$(document).ready(function () {
    // Open popup when clicking an image
    $(".popup-trigger").click(function () {
        var popupId = $(this).attr("data-popup");
        $("#" + popupId).fadeIn();
    });
	
    // Open popup when clicking an image container
    $(".popup-container").click(function () {
        var popupId = $(this).attr("data-popup");
        var bgImage = $(this).attr("data-bg");

        // Apply background image dynamically
        $("#" + popupId + " .popup-content").css("background-image", "url('" + bgImage + "')");

        $("#" + popupId).fadeIn();
    });

    // Close popup when clicking the close button
    $(".close-popup").click(function () {
        $(this).closest(".popup-overlay").fadeOut();
    });

    // Close popup when clicking outside the popup content
    $(".popup-overlay").click(function (e) {
        if ($(e.target).is(".popup-overlay")) {
            $(this).fadeOut();
        }
    });
});

