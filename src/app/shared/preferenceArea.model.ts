import { Area } from "./area.model";

export class PreferenceArea {
  public area: Area;
  public score: number;

  constructor(area: Area, score: number) {
    this.area = area;
    this.score = score;
  }
}
