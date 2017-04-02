var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "dojo/Evented", "esri/Map", "esri/views/MapView"], function (require, exports, Evented, EsriMap, MapView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapController = (function (_super) {
        __extends(MapController, _super);
        function MapController(node) {
            var _this = _super.call(this) || this;
            _this._map = new EsriMap({
                basemap: "topo"
            });
            _this._mapView = new MapView({
                map: _this._map,
                container: node,
                center: [-118.244, 34.052],
                zoom: 7
            });
            _this._mapView.then(function () {
                _this._listenForPointerMove();
            });
            return _this;
        }
        MapController.prototype._listenForPointerMove = function () {
            var _this = this;
            this._mapView.on('pointer-move', function (e) {
                var p = _this._mapView.toMap(e);
                _this.emit('pointer-move', p);
            });
        };
        MapController.prototype.destroy = function () {
            this._mapView.destroy();
            this._map.destroy();
        };
        return MapController;
    }(Evented));
    exports.default = MapController;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9NYXBDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFLQTtRQUEyQyxpQ0FBTztRQUloRCx1QkFBWSxJQUEwQjtZQUF0QyxZQUNFLGlCQUFPLFNBZVI7WUFkQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDO2dCQUN0QixPQUFPLEVBQUUsTUFBTTthQUNoQixDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDO2dCQUMxQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUk7Z0JBQ2QsU0FBUyxFQUFFLElBQWM7Z0JBQ3pCLE1BQU0sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxFQUFFLENBQUM7YUFDUixDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7O1FBQ0wsQ0FBQztRQUVPLDZDQUFxQixHQUE3QjtZQUFBLGlCQUtDO1lBSkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQUMsQ0FBTTtnQkFDdEMsSUFBTSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELCtCQUFPLEdBQVA7WUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUNILG9CQUFDO0lBQUQsQ0FqQ0EsQUFpQ0MsQ0FqQzBDLE9BQU8sR0FpQ2pEIiwiZmlsZSI6Ik1hcENvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFdmVudGVkIGZyb20gJ2Rvam8vRXZlbnRlZCc7XG5pbXBvcnQgKiBhcyBFc3JpTWFwIGZyb20gJ2VzcmkvTWFwJztcbmltcG9ydCAqIGFzIE1hcFZpZXcgZnJvbSAnZXNyaS92aWV3cy9NYXBWaWV3JztcbmltcG9ydCAqIGFzIFBvaW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9pbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDb250cm9sbGVyIGV4dGVuZHMgRXZlbnRlZCB7XG4gIHByaXZhdGUgX21hcDogX19lc3JpLk1hcDtcbiAgcHJpdmF0ZSBfbWFwVmlldzogX19lc3JpLk1hcFZpZXc7XG5cbiAgY29uc3RydWN0b3Iobm9kZTogSFRNTEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX21hcCA9IG5ldyBFc3JpTWFwKHtcbiAgICAgIGJhc2VtYXA6IFwidG9wb1wiXG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXBWaWV3ID0gbmV3IE1hcFZpZXcoe1xuICAgICAgbWFwOiB0aGlzLl9tYXAsXG4gICAgICBjb250YWluZXI6IG5vZGUgYXMgc3RyaW5nLFxuICAgICAgY2VudGVyOiBbLTExOC4yNDQsIDM0LjA1Ml0sXG4gICAgICB6b29tOiA3XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXBWaWV3LnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fbGlzdGVuRm9yUG9pbnRlck1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlbkZvclBvaW50ZXJNb3ZlKCkge1xuICAgIHRoaXMuX21hcFZpZXcub24oJ3BvaW50ZXItbW92ZScsIChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHAgPSB0aGlzLl9tYXBWaWV3LnRvTWFwKGUpO1xuICAgICAgdGhpcy5lbWl0KCdwb2ludGVyLW1vdmUnLCBwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbWFwVmlldy5kZXN0cm95KCk7XG4gICAgdGhpcy5fbWFwLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19
