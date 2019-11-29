var map;
var marker;

function createMap() {
    var mapOptions = {
        center: {lat: 59.401224, lng: 24.716711},
        zoom: 10,
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

    var markerOptions = {
        position: mapOptions.center,
        map: map,
        title: 'GlassImpex',
        icon: 'src/images/pin.svg'
    }

    marker = new google.maps.Marker(markerOptions);
}