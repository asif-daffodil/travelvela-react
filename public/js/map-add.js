function singleMap() {
    var markerIcon = {
        url: 'images/map-marker.png',
    };
    var myLatLng = {
        lng: $('#singleMap').data('longitude'),
        lat: $('#singleMap').data('latitude'),
    };
    var single_map = new google.maps.Map(document.getElementById('singleMap'), {
        zoom: 15,
        center: myLatLng,
        scrollwheel: false,
        fullscreenControl: true,
        scaleControl: false,
        navigationControl: false,
        streetViewControl: true,
        styles: [{
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }]
        }]
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: single_map,
        icon: markerIcon,
        draggable: true,
        title: 'Your location'
    });
    google.maps.event.addListener(marker, 'dragend', function (event) {
        document.getElementById("latitude").value = event.latLng.lat();
        document.getElementById("longitude").value = event.latLng.lng();
    });
}
var head = document.getElementsByTagName( 'head' )[0];

// Save the original method
var insertBefore = head.insertBefore;

// Replace it!
head.insertBefore = function( newElement, referenceElement ) {

    if ( newElement.href && newElement.href.indexOf( 'https://fonts.googleapis.com/css?family=Roboto' ) === 0 ) {
        return;
    }

    insertBefore.call( head, newElement, referenceElement );
};
var single_map = document.getElementById('singleMap');
if (typeof (single_map) != 'undefined' && single_map != null) {
    google.maps.event.addDomListener(window, 'load', singleMap);
}