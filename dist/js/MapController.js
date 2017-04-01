define(["require", "exports", "esri/Map", "esri/views/MapView"], function (require, exports, EsriMap, MapView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapController = (function () {
        function MapController(node) {
            this._map = new EsriMap({
                basemap: "topo"
            });
            this._mapView = new MapView({
                map: this._map,
                container: node,
                center: [-118.244, 34.052],
                zoom: 7
            });
        }
        MapController.prototype.destroy = function () {
            this._mapView.destroy();
            this._map.destroy();
        };
        return MapController;
    }());
    exports.default = MapController;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9NYXBDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUdBO1FBSUUsdUJBQVksSUFBMEI7WUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQztnQkFDdEIsT0FBTyxFQUFFLE1BQU07YUFDaEIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQztnQkFDMUIsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNkLFNBQVMsRUFBRSxJQUFjO2dCQUN6QixNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7Z0JBQzFCLElBQUksRUFBRSxDQUFDO2FBQ1IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELCtCQUFPLEdBQVA7WUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUNILG9CQUFDO0lBQUQsQ0FyQkEsQUFxQkMsSUFBQSIsImZpbGUiOiJNYXBDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRXNyaU1hcCBmcm9tICdlc3JpL01hcCc7XG5pbXBvcnQgKiBhcyBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcENvbnRyb2xsZXIge1xuICBwcml2YXRlIF9tYXA6IF9fZXNyaS5NYXA7XG4gIHByaXZhdGUgX21hcFZpZXc6IF9fZXNyaS5NYXBWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fbWFwID0gbmV3IEVzcmlNYXAoe1xuICAgICAgYmFzZW1hcDogXCJ0b3BvXCJcbiAgICB9KTtcblxuICAgIHRoaXMuX21hcFZpZXcgPSBuZXcgTWFwVmlldyh7XG4gICAgICBtYXA6IHRoaXMuX21hcCxcbiAgICAgIGNvbnRhaW5lcjogbm9kZSBhcyBzdHJpbmcsXG4gICAgICBjZW50ZXI6IFstMTE4LjI0NCwgMzQuMDUyXSxcbiAgICAgIHpvb206IDdcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbWFwVmlldy5kZXN0cm95KCk7XG4gICAgdGhpcy5fbWFwLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19
