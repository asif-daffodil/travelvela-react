/*====== bus stop map 1 ========*/
function busStopOne(selector) {
    const map = L.map(selector).setView([51.495, -0.09], 15);
    let osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let osmLayer = new L.TileLayer(osmUrl, {
        maxZoom: 19,
        attribution: 'Map data © OpenStreetMap contributors'
    });
    map.addLayer(osmLayer);
    
    function clickZoom(e) {
        map.setView(e.target.getLatLng(),15);
    }
    //this section sets the behavior of the markers themselves
    //everything below here controls interaction from outside the map
    let markers = [
        L.marker([51.497, -0.09], {
            title: "marker_1"
        }).addTo(map).bindPopup("Bus Stop 1").on('click', clickZoom).openPopup(),
        L.marker([51.495, -0.083], {
            title: "marker_2"
        }).addTo(map).bindPopup("Bus Stop 2").on('click', clickZoom),
        L.marker([51.49, -0.097], {
            title: "marker_3"
        }).addTo(map).bindPopup("Bus Stop 3").on('click', clickZoom),
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

busStopOne("bus-stop-map1");

/*========== bus stop 2 ============*/
function busStopTwo(selector) {
    let map = L.map(selector).setView([51.495, -0.09], 15);
    let osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let osmLayer = new L.TileLayer(osmUrl, {
        maxZoom: 19,
        attribution: 'Map data © OpenStreetMap contributors'
    });
    map.addLayer(osmLayer);

    //this section sets the behavior of the markers2 themselves
    function clickZoom(e) {
        map.setView(e.target.getLatLng(),15);
    }

    //everything below here controls interaction from outside the map
    let markers = [
        L.marker([51.497, -0.09], {
            title: "marker_4"
        }).addTo(map).bindPopup("Bus Stop 1").on('click', clickZoom).openPopup(),
        L.marker([51.495, -0.083], {
            title: "marker_5"
        }).addTo(map).bindPopup("Bus Stop 2").on('click', clickZoom),
        L.marker([51.49, -0.097], {
            title: "marker_6"
        }).addTo(map).bindPopup("Bus Stop 3").on('click', clickZoom),
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

busStopTwo('bus-stop-map2');

