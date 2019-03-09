//SODA SPRINGS IDAHO MAP
mapboxgl.accessToken = 'pk.eyJ1IjoibXBhdXN0aW4iLCJhIjoiY2pzNmNxa3d4MGFscDQ5bXYzZ3d0bDB4OSJ9.T4H6-wayVCA2MN73PmF8aQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-111.6047, 42.6544], // starting position
zoom: 9
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());