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
    // Debugging helper to log
    console.log("Document is ready.");

    // Ensure all popups are hidden when the page loads
    $(".popup-overlay").hide();

    // Open popup on clicking the container
    $(".popup-container").on("click", function () {
        const popupId = $(this).data("popup");
        const bgImage = $(this).data("bg");

        // Debug logs
        console.log(`Clicked popup-container with data-popup: ${popupId} and data-bg: ${bgImage}`);

        // Check if the popup exists
        if (!popupId || !$(`#${popupId}`).length) {
            console.error(`Popup with id "${popupId}" not found.`);
            return;
        }

        // Apply background image
        $(`#${popupId} .popup-content`).css("background-image", `url('${bgImage}')`);

        // Show the popup
        $(`#${popupId}`).fadeIn();
    });

    // Close popup on clicking the close button
    $(".close-popup").on("click", function () {
        console.log("Close button clicked.");
        $(this).closest(".popup-overlay").fadeOut();
    });

    // Close popup on clicking outside content
    $(".popup-overlay").on("click", function (e) {
        if ($(e.target).hasClass("popup-overlay")) {
            console.log("Clicked outside popup content.");
            $(this).fadeOut();
        }
    });
});




