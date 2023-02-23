import { ApartmentAttribute } from "../shared/apartmentAttribute.model";
import { Apartment } from "./apartment.model";

export class ApartmentBuilder {
  public name: string;
  public link: string;
  public description: string;
  public imagePath: string;
  public apartmentAttributes: ApartmentAttribute[];

  constructor() { }

  withName(name: string): ApartmentBuilder {
    this.name = name;
    return this;
  }

  withLink(link: string): ApartmentBuilder {
    this.link = link;
    return this;
  }

  withImage(imagePath: string): ApartmentBuilder {
    this.imagePath = imagePath;
    return this;
  }

  withDescription(description: string): ApartmentBuilder {
    this.description = description;
    return this;
  }

  withApartmentAttributes(apartmentAttributes: ApartmentAttribute[]): ApartmentBuilder {
    this.apartmentAttributes = apartmentAttributes;
    return this;
  }

  build(): Apartment {
    return new Apartment(this.name, this.link, this.description, this.imagePath, this.apartmentAttributes);
  }
}
