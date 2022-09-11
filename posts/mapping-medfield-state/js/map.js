/*Initialize Map*/
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Nhcm5kcCIsImEiOiJuNFpTT0NBIn0.vvWHIslTE5R6ZzEQ4tN05Q';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-71.33495, 42.21174], // starting position [lng, lat]
  zoom: 17, // starting zoom
  attributionControl: false,
  projection: 'lambertConformalConic' // display the map as a 3D globe
});

map.on('style.load', () => {
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(new mapboxgl.AttributionControl({
    customAttribution: '@2016 <a href="http://faineg.com">Faine Greenwood</a> and <a href="http://scarnecchia.github.io">Daniel Scarnecchia</a> | Imagery Captured with <a href="https://www.dronedeploy.com">DroneDeploy</a>'
    }));
  });

map.on('load', () => {
  map.addSource('medfield', {
    'type': 'raster',
    'url': 'mapbox://scarndp.0y2nyg9h'
  });

  map.addLayer({
    'id': 'drone',
    'source': 'medfield',
    'type': 'raster',
    'visibility': 'visible'
  });
});

