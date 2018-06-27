var markersData = [
    {
        lat: 67.3403707,     // Широта
        lng: -177.6379342,    // Долгота
        name: "Название 1", // Произвольное название, которое будем выводить в информационном окне
        address:"Адрес 1"   // Адрес, который также будем выводить в информационном окне
        
    },
    {
        lat: 67.490201,
        lng: 175.8428584,
        name: "Название 2",
        address:"Адрес 2"
    },
    {
        lat: 67.307674,
        lng: 169.1936064,
        name: "Название 3",
        address:"Адрес 3"
    }
];

var map, infoWindow;
 
function initMap() {
    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
    var mapOptions = {
        center: centerLatLng,
        zoom: 8
    };
 
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
    infoWindow = new google.maps.InfoWindow();
 
    google.maps.event.addListener(map, "click", function() {
        infoWindow.close();
    });
 
    var bounds = new google.maps.LatLngBounds();
 
    for (var i = 0; i < markersData.length; i++){
 
        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;
 
        addMarker(latLng, name, address);
        bounds.extend(latLng);
    }
      map.fitBounds(bounds);
 
}
google.maps.event.addDomListener(window, "load", initMap);

function addMarker(latLng, name, address) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name
    });
 
    google.maps.event.addListener(marker, "click", function() {
 
        var contentString = '<div class="infowindow">' +
                                '<h3>' + name + '</h3>' +
                                '<p>' + address + '</p>' +
                             '</div>';
 
        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);
 
    });
}