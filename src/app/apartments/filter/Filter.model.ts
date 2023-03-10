export class Filter {
  public operation: string;
  public propertyType: string;
  public center: string;
  public distance: number;
  public maxPrice: number;
  public studio: boolean;
  public bedrooms: number;
  public furnished: string;

  constructor(maxPrice: number, bedrooms: number) {
    this.operation = 'rent';
    this.propertyType = 'homes';
    this.center = '42.223661,-8.730236';
    this.distance = 15000;
    this.maxPrice = maxPrice;
    this.studio = false;
    this.bedrooms = bedrooms;
    this.furnished = 'furnished';
  }
}
