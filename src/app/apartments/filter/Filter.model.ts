export class Filter {
  public operation: string;
  public propertyType: string;
  public center: string;
  public distance: number;
  public maxPrice: number;
  public studio: boolean;
  public bedrooms: number;
  public furnished: string;

  constructor(maxPrice: number, bedrooms: number, center: string, distance: number) {
    console.log(center, distance)
    this.operation = 'rent';
    this.propertyType = 'homes';
    this.center = center.replace('(', '').replace(')', '').replace(' ', '');
    this.distance = distance;
    this.maxPrice = maxPrice;
    this.studio = false;
    this.bedrooms = bedrooms;
    this.furnished = 'furnished';
  }
}
