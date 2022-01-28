/////////////////* LEAFLET MAP *////////////////////

var map = undefined;
var mmap = undefined;

/* LEAFLET FOR BIG SCREENS */
function leafletmap() {
    if(map == undefined) {
        map = L.map('leaflet-map').setView([36.13471, -86.80376], 17);
    }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

/* LEAFLET FOR MOBILE DEVICES */
function mobilemap() {
    if(mmap == undefined) {
        mmap = L.map('mobile-map').setView([36.13471, -86.80376], 17);
    }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mmap);
}

jQuery(window).on('resize orientationchange', function () {
    "use strict";
    if (jQuery(window).width() > 1024) {
        leafletmap();
    }
    else {
        mobilemap();
    }
});