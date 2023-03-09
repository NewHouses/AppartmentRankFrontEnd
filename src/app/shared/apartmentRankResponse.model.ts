import { Apartment } from "../apartments/apartment.model";

export class ApartmentRankResponse {
  public apartments: Apartment[];
  public total: number;
}
