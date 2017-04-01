import * as EsriMap from 'esri/Map';
import * as MapView from 'esri/views/MapView';

const mapNode = document.createElement('div');
mapNode.id = "map";
document.querySelector('#app').appendChild(mapNode);

const map = new EsriMap({
  basemap: "streets"
});

const view = new MapView({
  map: map,
  container: "map",
  center: [-118.244, 34.052],
  zoom: 12
});
