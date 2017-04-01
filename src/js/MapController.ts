import * as EsriMap from 'esri/Map';
import * as MapView from 'esri/views/MapView';

export default class MapController {
  private _map: __esri.Map;
  private _mapView: __esri.MapView;

  constructor(node: HTMLElement | string) {
    this._map = new EsriMap({
      basemap: "topo"
    });

    this._mapView = new MapView({
      map: this._map,
      container: node as string,
      center: [-118.244, 34.052],
      zoom: 7
    });
  }

  destroy() {
    this._mapView.destroy();
    this._map.destroy();
  }
}
