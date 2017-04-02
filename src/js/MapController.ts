import * as Evented from 'dojo/Evented';
import * as EsriMap from 'esri/Map';
import * as MapView from 'esri/views/MapView';
import * as Point from 'esri/geometry/Point';

export default class MapController extends Evented {
  private _map: __esri.Map;
  private _mapView: __esri.MapView;

  constructor(node: HTMLElement | string) {
    super();
    this._map = new EsriMap({
      basemap: "topo"
    });

    this._mapView = new MapView({
      map: this._map,
      container: node as string,
      center: [-118.244, 34.052],
      zoom: 7
    });

    this._mapView.then(() => {
      this._listenForPointerMove();
    });
  }

  private _listenForPointerMove() {
    this._mapView.on('pointer-move', (e: any) => {
      const p = this._mapView.toMap(e);
      this.emit('pointer-move', p);
    });
  }

  destroy() {
    this._mapView.destroy();
    this._map.destroy();
  }
}
