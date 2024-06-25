document.addEventListener("DOMContentLoaded", function() {
    var image1 = document.getElementById("ragdollImage");
    var image2 = document.getElementById("ragdollImage2");
    var showButton = document.getElementById("showImageButton");

    image1.addEventListener("click", function() {
        image1.style.display = "none";
    });

    image2.addEventListener("click", function() {
        image2.style.display = "none";
    });

    showButton.addEventListener("click", function() {
        image1.style.display = "block";
        image2.style.display = "block";
    });
});
$(document).ready(function() {
    // Smooth scroll for all anchors with href starting with #
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        // Animate scroll to the target
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Show or hide the back-to-top button based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Scroll to the top when the back-to-top button is clicked
    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
    $(document).ready(function() {
        $('.accordion-title').click(function() {
            // Toggle the display of the content next to the clicked title
            $(this).next('.accordion-content').slideToggle();
            // Hide other open content
            $(this).parent().siblings().find('.accordion-content').slideUp();
        });
        const images = [
            'assests/images/5A840FA3-188B-48E3-95A1-C36E59B10214.jpeg',
           'assests/images/da0cae36-f5d6-47e8-af96-5d891b399c55.jpeg',
            'assests/images/9a85cb6b-c402-4117-9530-8bd26035d2d1.jpeg' // Use .jpg if that's the correct extension
        ];
    
        // Initialize the index for the current image
        let currentIndex = 0;
    
        // Set the initial background image
        $('body').css('background-image', `url(${images[currentIndex]})`);
    
        // Add event listener for the button
        $('#switchBackgroundButton').click(function() {
            // Update the index to the next image
            currentIndex = (currentIndex + 1) % images.length;
    
            // Set the new background image
            $('body').css('background-image', `url(${images[currentIndex]})`);
        });
    });
    });

