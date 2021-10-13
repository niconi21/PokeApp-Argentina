let map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.92272257906043, lng: -57.956058388479924 },
        zoom: 18,
    });
    var marker1 = new google.maps.Marker({
        position: { lat: -34.92272257906043, lng: -57.956058388479924 },
        draggable: false
    });
    marker1.setMap(map)
    infoWindow = new google.maps.InfoWindow();
}
