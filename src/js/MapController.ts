import * as EsriMap from 'esri/Map';
import * as MapView from 'esri/views/MapView';
import * as Point from 'esri/geometry/Point';
import * as rx from 'rxjs';

export default class MapController {
  private _map: __esri.Map;
  private _mapView: __esri.MapView;

  private _mousePosition = new rx.Subject<__esri.Point>();

  public mousePosition = this._mousePosition.asObservable();

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

    this._mapView.then(() => {
      this._listenToPointerMove();
    });
  }

  private _listenToPointerMove() {
    this._mapView.on('pointer-move', (e: any) => {
      let p = this._mapView.toMap(e);
      this._mousePosition.next(p);
    });
  }

  destroy() {
    this._mapView.destroy();
    this._map.destroy();
  }
}
