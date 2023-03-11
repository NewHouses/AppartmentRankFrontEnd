import { ApartmentAttribute } from "./apartmentAttribute.model";
import { ParkingSpace } from "./parkingSpace.model";

export class Apartment {

  public id: string;
  public score: number;
  public name: string;
  public description: string;
  public imageUrl: string;
  public price: number;
  public propertyType: string;
  public operation: string;
  public size: number;
  public isExterior: boolean;
  public rooms: number;
  public bathrooms: number;
  public address: string;
  public latitude: number;
  public longitude: number;
  public link: string;
  public status: string;
  public newDevelopment: boolean;
  public parkingSpace: ParkingSpace;
  public apartmentAttributes: ApartmentAttribute[];

  constructor(name: string, link: string, description: string, imageUrl: string, apartmentAttributes: ApartmentAttribute[]) {
    this.name = name;
    this.link = link;
    this.description = description;
    this.imageUrl = imageUrl;
    this.apartmentAttributes = apartmentAttributes;
  }
}
