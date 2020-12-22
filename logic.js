

var map = new mapboxgl.Map({
  container: 'map', // container id
  style:'https://api.mapbox.com/styles/v1/gbatth500/ckiz52u4a0ydd1apri7myrrrl.html?fresh=true&title=copy&access_token=pk.eyJ1IjoiZ2JhdHRoNTAwIiwiYSI6ImNraWpwMXk2bjAyMTUydHFoNjAwYTIwZ2wifQ.7pi7olkUdhZO9OLMjMM8Pw',
  
         
});

map.on('load', function() {
  var layers = ['0-10', '10-20', '20-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
var colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];

for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}

map.on('mousemove', function(e) {
  var states = map.queryRenderedFeatures(e.point, {
    layers: ['statedata']
  });

  if (states.length > 0) {
    document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.name + '</strong></h3><p><strong><em>' + states[0].properties.density + '</strong> people per square mile</em></p>';
  } else {
    document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
  }
});

map.getCanvas().style.cursor = 'default';

map.fitBounds([[-133.2421875, 16.972741], [-47.63671875, 52.696361]]);

});
  
