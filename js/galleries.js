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
            'subHtml': 'Four layers rigid-flex material at 10.8mm diameter'
        }, {
            'src': 'images/portfolio/bldc2_800.jpg',
            'subHtml': 'Double sided soldering with total thickness of 2.35mm'
        }, {
            'src': 'images/portfolio/bldc3_800.jpg',
            'subHtml': 'Weighing only 0.28grams, able to control 2 brushless DC motors'
        }, {
            'src': 'images/portfolio/bldc4_800.jpg',
            'subHtml': "Comparison to 4mm Namiki brushless DC controller board"
        }, { // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/embed/QTG2tQozBTE',
            'subHtml': 'Controling Smoovy 3mm diameter brushless DC motor in stepping mode'
        }, { // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/embed/QTG2tQozBTE',
            'subHtml': 'Controling Smoovy 3mm diameter brushless DC motor in continuous mode'
        }, { // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/embed/x5mda9hJNuQ',
            'subHtml': 'Controling Namiki 2mm diameter brushless DC motor'
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
            'subHtml': 'Wireless electronics smaller than a shirt button'
        }, {
            'src': 'images/portfolio/wbldc2_800.jpg',
            'subHtml': 'Wireless 802.15.4 devices on rice grain'
        }, {
            'src': 'images/portfolio/wbldc3_800.jpg',
            'subHtml': 'Board diameter is 9.7mm and 0.5mm thick'
        }, {
            'src': 'images/portfolio/wbldc4_800.jpg',
            'subHtml': 'It is capable of driving 2 brushless DC motors or 4 DC motors with brushes'
        }, {
            'src': 'images/portfolio/wbldc5_800.jpg',
            'subHtml': 'An IoT device powered by coin cells that last for years'
        }, {
            'src': 'images/portfolio/wbldc6_800.jpg',
            'subHtml': 'Wireless controller for micro submarine with 4 propellers'
        }, {
            'src': 'images/portfolio/wbldc7_800.jpg',
            'subHtml': 'Embedded inside medical capsule robot with legs'
        }, {
            'src': 'images/portfolio/wbldc8_800.jpg',
            'subHtml': 'Being used by capsule robot to release a surgical clips'
        }, {
            'src': 'images/portfolio/wbldc9_800.jpg',
            'subHtml': 'A series of wireless modules with some sets of actuator driving and sensing'
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
        dynamicEl: [{ // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/embed/11lk4Q6Ex5g',
            'subHtml': 'Voice command on capsule robot without a surgical mask'
        }, { // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/embed/pOWsAzsWrzQ',
            'subHtml': 'Voice command on capsule robot while wearing a surgical mask'
        }, { // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/embed/c6EiOUmYdBY',
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
        autoplay: false,
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
        }, { // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/embed/xvFblfu8p7U',
            'subHtml': 'Snappy - the winner of Silicon Laboratories IoT Contest'
        }]
    });
});

// GALLERY 5
jQuery('#gallery5').on('click', function (e) {
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
        dynamicEl: [{ // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/embed/gWF5xiHhD1c',
            'subHtml': 'Master and slave microgrippers doing synchronized motion'
        }, { // You Tube videos work only on a server.
            'src': 'https://www.youtube.com/embed/MkD9CRRetyc',
            'subHtml': 'Master and slave microgrippers doing synchronized motion'
        }]
    });
});
