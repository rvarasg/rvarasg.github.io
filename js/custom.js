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
    console.log("Document is ready. Initializing popup functionality.");

    // Ensure all popups are hidden on page load
    $(".popup-overlay").hide();

    // Ensure popups open when clicking an image inside the container
    $(".popup-container, .popup-trigger").on("click", function () {
        const popupId = $(this).closest(".popup-container").data("popup"); // Get the popup ID
        const bgImage = $(this).closest(".popup-container").data("bg"); // Get the background image

        // Debugging logs
        console.log(`Clicked popup-container. Popup ID: ${popupId}, Background Image: ${bgImage}`);

        // Validate popup ID
        if (!popupId || !$(`#${popupId}`).length) {
            console.error(`Popup with ID '${popupId}' not found.`);
            return;
        }

        // Apply background image and show the popup
        if (bgImage) {
            $(`#${popupId} .popup-content`).css("background-image", `url('${bgImage}')`);
        }
        $(`#${popupId}`).fadeIn(); // Display the popup
    });

    // Handle closing the popup when clicking the close button
    $(".close-popup").on("click", function () {
        console.log("Close button clicked.");
        $(this).closest(".popup-overlay").fadeOut(); // Hide the popup
    });

    // Handle closing the popup when clicking outside the content
    $(".popup-overlay").on("click", function (e) {
        if ($(e.target).hasClass("popup-overlay")) {
            console.log("Clicked outside the popup content. Closing popup.");
            $(this).fadeOut();
        }
    });
});

