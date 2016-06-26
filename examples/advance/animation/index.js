
var map = new maptalks.Map("map", {
  center: [121.48542888885189, 31.228541533313702],
  zoom: 14,
  baseLayer: new maptalks.TileLayer("tile", {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});

var coordinate = new maptalks.Coordinate(121.48542, 31.22854);
var marker = new maptalks.Marker(coordinate, {
        symbol:[
            {
                'markerType' : 'ellipse',
                'markerWidth' : 10,
                'markerHeight' : 10
            }
        ]
    });

var layer = new maptalks.VectorLayer('vector');
map.addLayer(layer);
layer.addGeometry(marker);

marker.animate({
    symbol : [
        {
            'markerWidth' : 100,
            'markerHeight' : 100
        }
    ]
});
