export class Area {
  public name: string;
  public path: LatLong[];

  constructor(name: string) {
    this.name = name;
    this.path = [];
  }
}

export class LatLong {
  public lat: number;
  public lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
