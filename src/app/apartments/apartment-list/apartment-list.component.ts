import { Component } from '@angular/core';
import { Apartment } from '../apartment.model';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent {
  apartments: Apartment[] = [
    new Apartment('Alquiler de Piso en As Travesas - Balaídos', 'https://www.idealista.com/inmueble/100121936/', 'ALQUILER PISO 3 HAB. GARAJE Y TRASTERO ZONA FLORIDA\n¿Estás buscando amplitud, luminosidad, situación y comodidad?\n¡Lo tenemos!\nPrecioso piso de 100m2, recién reformado y en el que la luz es su principal atractivo.\nSe compone de: 3 dormitorios, 1 despacho con chimenea, 2 baños, amplio salón - comedor con acceso directo a la terraza con vistas al Lagares, cocina totalmente equipada y amueblada y zona de lavandería independiente.\n" Disfrutar de una cervecita al aire libre y sí además tiene vistas verdes.. . no tiene precio"\nSituado en una zona con todos los servicios a mano, para hacerte el día a día más fácil.\nAdemás incluye plaza de garaje doble y trastero.\nSe alquila totalmente amueblado.\nNo admite mascotas.\nLlámanos, no lo dejes escapar ?', 'https://img3.idealista.com/blur/WEB_DETAIL_TOP-L-L/0/id.pro.es.image.master/7e/34/08/1069924079.jpg')
  ];
}
