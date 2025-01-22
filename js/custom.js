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
    // Hide all popups on page load
    $(".popup-overlay").hide();

    // Open popup on clicking the container
    $(".popup-container").on("click", function () {
        const popupId = $(this).data("popup");
        const bgImage = $(this).data("bg");

        // Set background dynamically
        $("#" + popupId + " .popup-content").css("background-image", `url('${bgImage}')`);

        // Show popup
        $("#" + popupId).fadeIn();
    });

    // Close popup on clicking close button
    $(".close-popup").on("click", function () {
        $(this).closest(".popup-overlay").fadeOut();
    });

    // Close popup on clicking outside content
    $(".popup-overlay").on("click", function (e) {
        if ($(e.target).hasClass("popup-overlay")) {
            $(this).fadeOut();
        }
    });
});


