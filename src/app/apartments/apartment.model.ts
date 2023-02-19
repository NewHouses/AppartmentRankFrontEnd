import { ApartmentAttribute } from "../shared/apartmentAttribute.model";

export class Apartment {
  public name: string;
  public link: string;
  public description: string;
  public imagePath: string;
  public apartmentAttributes: ApartmentAttribute[];

  constructor(name: string, link: string, description: string, imagePath: string, apartmentAttributes: ApartmentAttribute[]) {
    this.name = name;
    this.link = link;
    this.description = description;
    this.imagePath = imagePath;
    this.apartmentAttributes = apartmentAttributes;
  }
}
