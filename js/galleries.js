// GALLERY 1
jQuery('#gallery1').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 4000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/portfolio/bldc1_800.jpg',
            'subHtml': 'Four layers rigid-flex material'
        }, {
            'src': 'images/portfolio/bldc2_800.jpg',
            'subHtml': 'Board thickness is 0.5mm'
        }, {
            'src': 'images/portfolio/bldc3_800.jpg',
            'subHtml': 'Board diameter is 9.7mm'
        }, {
            'src': 'images/portfolio/bldc4_800.jpg',
            'subHtml': 'BLDC controller for two motors'
        }]
    });
});
