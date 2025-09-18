/*========== destination map ============*/
function destinationMap(selector) {
    let map = L.map(selector).setView([51.495, -0.09], 15);
    let osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let osmLayer = new L.TileLayer(osmUrl, {
        maxZoom: 19,
        attribution: 'Map data © OpenStreetMap contributors'
    });
    
    map.addLayer(osmLayer);

    function clickZoom(e) {
        map.setView(e.target.getLatLng(),15);
    }

    //everything below here controls interaction from outside the map
    let markers = [
        L.marker([51.497, -0.09], {
            title: "destination_marker_1"
        }).addTo(map).bindPopup("Bus Stop 1").on('click', clickZoom).openPopup(),
        L.marker([51.495, -0.083], {
            title: "destination_marker_2"
        }).addTo(map).bindPopup("Bus Stop 2").on('click', clickZoom),
    ];

    function markerFunction(id) {
        for (let i in markers) {
            let markerID = markers[i].options.title;
            let position = markers[i].getLatLng();
            if (markerID == id) {
                map.setView(position, 15);
                markers[i].openPopup();
            }
        }
    }

    $(".bus-stop-overview .list-group-item").each(function() {
        $(this).on('click', function(){
         markerFunction($(this)[0].id);
         $(this).addClass('active');
         $(this).siblings().removeClass('active');
        })
    });
}

destinationMap('destination-map');