"use strict";
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.871034, 29.355411], // starting position
    zoom: 19,
});


map.on('load', function() {

// Add a layer showing the places.
    map.addLayer({
            "id": "places",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "properties": {
                            "description":"<p class='sammys'>Sammy's</p><ul><li>Breakfast: Eggs, bacon, and a waffle</li><li>Lunch: Cheeseburger, seasoned fries, and the salad bar</li><li>Dinner: Southwest Chicken w/ cheese gravy, and mashed potatoes.</li></ul><h7 class='factoid'>*cool factoid: All bread and deserts are baked fresh at the bakery.</h7>",
                            "icon": "restaurant"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-98.871034, 29.355411]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "description": "<div class='mexico'><p class='miMexico'>Mi Mexico Restaurant: Jalisco Style (location #1)</p></div><ul><li>Burrito Jalisco</li></ul>",
                            "icon": "restaurant"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-98.532873, 28.927269]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "description": "<p class='capparelli'>Capparelli's Italian Restaurant</p></div><ul><li>Chicken Alfredo</li></ul>",
                            "icon": "restaurant"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-98.290980, 29.622242]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "{icon}-15",
                "icon-allow-overlap": true
            }
    });

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mouseenter', 'places', function(e) {
// Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

// Populate the popup and set its coordinates
// based on the feature found.
    popup.setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
});

map.on('mouseleave', 'places', function() {
    map.getCanvas().style.cursor = '';
    popup.remove();
});
});
mapboxgl.accessToken = 'pk.eyJ1IjoiandoZXN0ZXIiLCJhIjoiY2syMmpoaWx2MDFxdDNpcDl2YzdpMXk2aiJ9.r0JUTdOryghfpKF_NBHnjA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.871034, 29.355411], // starting position
    zoom: 9 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);

}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;

}

