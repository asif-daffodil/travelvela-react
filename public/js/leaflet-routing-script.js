var map = L.map('map', {
    zoomControl: false,
}).setView([44.907852, 7.673789],15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '© OpenStreetMap contributors'}).addTo(map);

var waypointsData = [
    L.latLng(44.91221, 7.671685),
    L.latLng(44.90451, 7.673789),
];

L.control.zoom({
    position:'topright'
}).addTo(map);

var control = L.Routing.control({
    waypoints: waypointsData,
    routeWhileDragging: true,
    showAlternatives: true,
    reverseWaypoints: true,
    position:'topleft',
    geocoder: L.Control.Geocoder.nominatim(),
    lineOptions: {
        styles: [
            { color: 'black', opacity: 0.15, weight: 9 },
            { color: 'white', opacity: 0.8, weight: 6 },
            { color: 'steelblue', opacity: 1, weight: 4 }
        ]
    },
    altLineOptions: {
        styles: [
            { color: 'black', opacity: 0.15, weight: 9 },
            { color: 'white', opacity: 0.8, weight: 6 },
            { color: 'hotpink', opacity: 1, weight: 4 }
        ]
    },

}).addTo(map);


function createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}

map.on('click', function(e) {
    var container = L.DomUtil.create('div'),
        startBtn = createButton('Start from this location', container),
        destBtn = createButton('Go to this location', container);
    container.setAttribute('class', 'leaflet-popup-btn-box');
    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);

    L.DomEvent.on(startBtn, 'click', function() {
        control.spliceWaypoints(0, 1, e.latlng);
        map.closePopup();
    });
    L.DomEvent.on(destBtn, 'click', function() {
        control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
        map.closePopup();
    });
});