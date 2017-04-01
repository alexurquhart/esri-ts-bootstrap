import * as EsriMap from 'esri/Map';
import * as MapView from 'esri/views/MapView';

describe('Map Controller Tests', () => {
  it('should do stuff', () => {
    const mapNode = document.createElement('div');
    mapNode.id = "map";
    document.body.appendChild(mapNode);

    const map = new EsriMap({
      basemap: "streets"
    });

    const view = new MapView({
      map: map,
      container: "map",
      center: [-118.244, 34.052],
      zoom: 12
    });

    expect(1).toBeTruthy();
  })
});