import MapController from './MapController';

const mapNode = document.createElement('div');
mapNode.id = "map";
document.querySelector('#app').appendChild(mapNode);

const mc = new MapController(mapNode);

mc.on('pointer-move', (e: __esri.Point) => {
  console.log(e);
});