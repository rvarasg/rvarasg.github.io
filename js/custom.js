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


document.addEventListener("DOMContentLoaded", function () {
    // Open popup
    document.querySelectorAll(".open-popup").forEach(button => {
        button.addEventListener("click", function () {
            const popupId = this.getAttribute("data-popup");
            document.getElementById(popupId).style.display = "flex";
        });
    });

    // Close popup
    document.querySelectorAll(".close-popup").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.parentElement.style.display = "none";
        });
    });

    // Close on clicking outside
    document.querySelectorAll(".popup-overlay").forEach(popup => {
        popup.addEventListener("click", function (e) {
            if (e.target === this) this.style.display = "none";
        });
    });
});
