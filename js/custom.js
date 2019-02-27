// Custom JavaScript Functions
// ************************************************************

function rotate_slides() {                  // Rotate the background image of the header
    var active_pic = $('.slide.active');    // Variable references element with 'slide' and 'active' classes
    // Next slide will be the next element that has class 'slide' (if length == 0 we're at the end - start over)
    var next_pic = (active_pic.next('.slide').length > 0) ? active_pic.next('.slide') : $('#slides img:first');
    next_pic.fadeTo(1500, 0.7);             // Fade in the next slide to an opacity of 0.7, and...
    active_pic.fadeOut(1500, function() {   // simultaneously, fade out the current slide to zero opacity, then...
        active_pic.removeClass('active');   // Remove 'active' class
        next_pic.addClass('active');        // Add 'active' class to the currently visible slide
    });
}
