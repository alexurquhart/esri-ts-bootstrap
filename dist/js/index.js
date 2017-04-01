define(["require", "exports", "esri/Map", "esri/views/MapView"], function (require, exports, EsriMap, MapView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var mapNode = document.createElement('div');
    mapNode.id = "map";
    document.querySelector('#app').appendChild(mapNode);
    var map = new EsriMap({
        basemap: "streets"
    });
    var view = new MapView({
        map: map,
        container: "map",
        center: [-118.244, 34.052],
        zoom: 12
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQSxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ25CLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXBELElBQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxTQUFTO0tBQ25CLENBQUMsQ0FBQztJQUVILElBQU0sSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDO1FBQ3ZCLEdBQUcsRUFBRSxHQUFHO1FBQ1IsU0FBUyxFQUFFLEtBQUs7UUFDaEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQzFCLElBQUksRUFBRSxFQUFFO0tBQ1QsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRXNyaU1hcCBmcm9tICdlc3JpL01hcCc7XG5pbXBvcnQgKiBhcyBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5cbmNvbnN0IG1hcE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1hcE5vZGUuaWQgPSBcIm1hcFwiO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpLmFwcGVuZENoaWxkKG1hcE5vZGUpO1xuXG5jb25zdCBtYXAgPSBuZXcgRXNyaU1hcCh7XG4gIGJhc2VtYXA6IFwic3RyZWV0c1wiXG59KTtcblxuY29uc3QgdmlldyA9IG5ldyBNYXBWaWV3KHtcbiAgbWFwOiBtYXAsXG4gIGNvbnRhaW5lcjogXCJtYXBcIixcbiAgY2VudGVyOiBbLTExOC4yNDQsIDM0LjA1Ml0sXG4gIHpvb206IDEyXG59KTtcbiJdfQ==
