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
        autoplay: false,
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
        }, { // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/watch?v=x5mda9hJNuQ',
            'subHtml': 'Controling Namiki 2mm diameter BLDC motor'
        }]
    });
});

// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
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
            'src': 'images/portfolio/wbldc1_800.jpg',
            'subHtml': 'Four layers FR4 material'
        }, {
            'src': 'images/portfolio/wbldc2_800.jpg',
            'subHtml': 'Board thickness is 0.5mm'
        }, {
            'src': 'images/portfolio/wbldc3_800.jpg',
            'subHtml': 'Board diameter is 9.7mm'
        }, {
            'src': 'images/portfolio/wbldc4_800.jpg',
            'subHtml': 'Wireless controller is energy efficient'
        }, {
            'src': 'images/portfolio/wbldc5_800.jpg',
            'subHtml': 'It is an IoT device powered by a coin battery'
        }, {
            'src': 'images/portfolio/wbldc6_800.jpg',
            'subHtml': 'Actual size of BLDC wireless controller'
        }]
    });
});

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: false,
        pause: 4000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'https://www.youtube.com/watch?v=11lk4Q6Ex5g',
            'subHtml': 'Voice command on capsule robot without a surgical mask'
        }, { // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/watch?v=1JYSGsY_G3U',
            'subHtml': 'Voice command on capsule robot while wearing a surgical mask'
        }, { // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/watch?v=c6EiOUmYdBY',
            "subHtml": "Voice command on capsule robot while wearing a 'very thick' surgical mask"
        }]
    });
});

// GALLERY 4
jQuery('#gallery4').on('click', function (e) {
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
            'src': 'images/portfolio/snappy1_800.jpg',
            'subHtml': 'Snappy modular robotics kit'
        }, {
            'src': 'images/portfolio/snappy2_800.jpg',
            'subHtml': 'Snappy modular robotics kit'
        }, {
            'src': 'images/portfolio/snappy3_800.jpg',
            'subHtml': 'Snappy - quick stacking modules with magnetic contacts'
        }, {
            'src': 'images/portfolio/snappy4_800.jpg',
            'subHtml': 'Snappy 2-on-2 robot soccer game'
        }, {
            'src': 'images/portfolio/snappy5_800.jpg',
            'subHtml': 'Kit includes Arduino shield and wall charger'
        }, {
            'src': 'images/portfolio/snappy6_800.jpg',
            'subHtml': 'Kit includes maze walls and robo ball'
        }]
    });
});