window.onload = function () {
  var mapOptions = {
    center: new google.maps.LatLng(21, 78),
    zoom: 5,
    maxZoom: 6
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var getTileUrl = function (tile, zoom) {
    return '//gibs.earthdata.nasa.gov/wmts/epsg3857/best/' +
      'MODIS_Terra_Aerosol/default/2013-12-02/' +
      'GoogleMapsCompatible_Level6/' +
      zoom + '/' + tile.y + '/' +
      tile.x + '.png';
  };

  var layerOptions = {
    alt: 'MODIS_Terra_Aerosol',
    getTileUrl: getTileUrl,
    maxZoom: 6,
    minZoom: 1,
    name: 'MODIS_Terra_Aerosol',
    tileSize: new google.maps.Size(256, 256),
    opacity: 0.5
  };

  var imageMapType = new google.maps.ImageMapType(layerOptions);
  map.overlayMapTypes.insertAt(0, imageMapType);
};