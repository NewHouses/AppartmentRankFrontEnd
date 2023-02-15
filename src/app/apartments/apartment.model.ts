export class Apartment {
  public name: string;
  public link: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, link: string, description: string, imagePath: string) {
    this.name = name;
    this.link = link;
    this.description = description;
    this.imagePath = imagePath;
  }
}
