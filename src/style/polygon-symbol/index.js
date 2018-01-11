
var map = new maptalks.Map('map', {
  center: [-0.113049,51.49856],
  zoom: 13,
  attribution: true,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains),
    attribution: '$(attribution)'
  })
});

var layer = new maptalks.VectorLayer('vector').addTo(map);

var rect = new maptalks.Rectangle(
  [-0.143049,51.50856], 4250, 3000,
  {
    symbol:{
      'polygonFill' : 'rgb(135,196,240)',
      'polygonOpacity' : 1,
      'lineColor' : '#1bbc9b',
      'lineWidth' : 6,
      'lineJoin'  : 'round', //miter, round, bevel
      'lineCap'   : 'round', //butt, round, square
      'lineDasharray' : null,//dasharray, e.g. [10, 5, 5]
      'lineOpacity ' : 1
    }
  }
).addTo(layer);
