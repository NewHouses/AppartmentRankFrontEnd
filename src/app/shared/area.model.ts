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
  public long: number;

  constructor(lat: number, long: number) {
    this.lat = lat;
    this.long = long;
  }
}
