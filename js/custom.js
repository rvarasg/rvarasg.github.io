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
    $(".popup-overlay").removeClass("active");

    // Open popup when clicking an image container
    $(".popup-container, .popup-trigger").on("click", function () {
        const popupId = $(this).closest(".popup-container").data("popup");
        const bgImage = $(this).closest(".popup-container").data("bg");

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
        
        // Add 'active' class to show popup
        $(`#${popupId}`).addClass("active");
    });

    // Close popup when clicking the close button
    $(".close-popup").on("click", function () {
        console.log("Close button clicked.");
        $(this).closest(".popup-overlay").removeClass("active"); // Hide the popup
    });

    // Close popup when clicking outside the popup content
    $(".popup-overlay").on("click", function (e) {
        if ($(e.target).hasClass("popup-overlay")) {
            console.log("Clicked outside the popup content. Closing popup.");
            $(this).removeClass("active");
        }
    });
});
