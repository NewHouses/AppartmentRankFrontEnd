import { EventEmitter, Injectable } from "@angular/core";
import { PreferenceService } from "../preferences/preference.service";
import { ApartmentAttribute } from "../shared/apartmentAttribute.model";
import { Apartment } from "./apartment.model";

@Injectable()
export class ApartmentService {
  private apartments: Apartment[] = [
    new Apartment('Alquiler de Piso en As Travesas - Balaídos',
      'https://www.idealista.com/inmueble/100121936/',
      'ALQUILER PISO 3 HAB. GARAJE Y TRASTERO ZONA FLORIDA\n¿Estás buscando amplitud, luminosidad, situación y comodidad?\n¡Lo tenemos!\nPrecioso piso de 100m2, recién reformado y en el que la luz es su principal atractivo.\nSe compone de: 3 dormitorios, 1 despacho con chimenea, 2 baños, amplio salón - comedor con acceso directo a la terraza con vistas al Lagares, cocina totalmente equipada y amueblada y zona de lavandería independiente.\n" Disfrutar de una cervecita al aire libre y sí además tiene vistas verdes.. . no tiene precio"\nSituado en una zona con todos los servicios a mano, para hacerte el día a día más fácil.\nAdemás incluye plaza de garaje doble y trastero.\nSe alquila totalmente amueblado.\nNo admite mascotas.\nLlámanos, no lo dejes escapar ?',
      'https://img3.idealista.com/blur/WEB_DETAIL_TOP-L-L/0/id.pro.es.image.master/7e/34/08/1069924079.jpg',
      [
        new ApartmentAttribute('Terraza', 2),
        new ApartmentAttribute('Lavalouzas', 1),
        new ApartmentAttribute('Lavadoura', 2)
      ]
    )
  ];

  constructor(private preferenceService: PreferenceService) { }

  apartmentSelected = new EventEmitter<Apartment>();

  getApartments() {
    return this.apartments.slice();
  }

  getApartment(index: number) {
    return this.apartments.slice()[index];
  }

  addApartmentAttributesToPreferenceList(apartmentAttributes: ApartmentAttribute[]) {
    this.preferenceService.addApartmentAttributes(apartmentAttributes);
  }
}
