import { Apartment } from "./apartment.model";
import { ApartmentAttribute } from "./apartmentAttribute.model";

export class ApartmentBuilder {
  public name: string;
  public link: string;
  public description: string;
  public imageUrl: string;
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

  withImage(imageUrl: string): ApartmentBuilder {
    this.imageUrl = imageUrl;
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
    return new Apartment(this.name, this.link, this.description, this.imageUrl, this.apartmentAttributes);
  }
}
