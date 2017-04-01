define(["require", "exports", "./MapController"], function (require, exports, MapController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var mapNode = document.createElement('div');
    mapNode.id = "map";
    document.querySelector('#app').appendChild(mapNode);
    var mc = new MapController_1.default(mapNode);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ25CLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXBELElBQU0sRUFBRSxHQUFHLElBQUksdUJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXBDb250cm9sbGVyIGZyb20gJy4vTWFwQ29udHJvbGxlcic7XG5cbmNvbnN0IG1hcE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1hcE5vZGUuaWQgPSBcIm1hcFwiO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpLmFwcGVuZENoaWxkKG1hcE5vZGUpO1xuXG5jb25zdCBtYyA9IG5ldyBNYXBDb250cm9sbGVyKG1hcE5vZGUpOyJdfQ==
