import MapController from './MapController';

const mapNode = document.createElement('div');
mapNode.id = "map";
document.querySelector('#app').appendChild(mapNode);

const mc = new MapController(mapNode);