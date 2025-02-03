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

    // Ensure all popups are hidden when the page loads
    $(".popup-overlay").hide();

    // Open popup when clicking an image container
    $(".popup-container").on("click", function () {
        var popupId = $(this).attr("data-popup");
        var bgImage = $(this).attr("data-bg");

        console.log(`Clicked popup-container. Popup ID: ${popupId}, Background Image: ${bgImage}`);

        // Validate popup ID
        if (!popupId || !$(`#${popupId}`).length) {
            console.error(`Popup with ID '${popupId}' not found.`);
            return;
        }

        // Apply background image correctly
        if (bgImage) {
            $(`#${popupId} .popup-content`).css({
                "background-image": `url('${bgImage}')`,
                "background-size": "cover",  // Ensures full coverage
                "background-position": "center", // Centers the image
                "background-repeat": "no-repeat" // Prevents tiling
            });
        }

        // Show the popup
        $(`#${popupId}`).fadeIn();
    });

    // Close popup when clicking the close button
    $(".close-popup").on("click", function () {
        console.log("Close button clicked.");
        $(this).closest(".popup-overlay").fadeOut();
    });

    // Close popup when clicking outside the popup content
    $(".popup-overlay").on("click", function (e) {
        if ($(e.target).hasClass("popup-overlay")) {
            console.log("Clicked outside the popup content. Closing popup.");
            $(this).fadeOut();
        }
    });
});

window.addEventListener('scroll', function() {
    const sectionTitle = document.querySelector('.section-with-title');
    const title = sectionTitle.querySelector('.section-title');
    
    if (window.scrollY > sectionTitle.offsetTop) {
        sectionTitle.classList.add('sticky');
    } else {
        sectionTitle.classList.remove('sticky');
    }
});


