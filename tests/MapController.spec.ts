import MapController from 'app/MapController';

describe('Map Controller Tests', () => {
  beforeEach(() => {
    let div = document.createElement('div');
    div.id = 'map';
    document.body.appendChild(div);
  });

  it('It should create a map', () => {
    let mc = new MapController('map');
    expect(mc).toBeTruthy();
    let mapNode = document.querySelector('#map');
    expect(mapNode.classList.contains('esri-view')).toBeTruthy();
  });
});