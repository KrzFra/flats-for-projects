import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flat } from '../../interfaces/flat.interface';

@Injectable({
  providedIn: 'root',
})
export class FlatServiceService {
  flats: Flat[] = [];

  constructor() {
    const amountOfFlats = 4;

    for (let i = 0; i < amountOfFlats; i++) {
      this.flats.push({
        id: i.toString(),
        rent: 1000 + i,
        address: {
          street: `street${i}Name`,
          houseNumber: i.toString(),
          zipCode: 80000 + i,
          city: `city${i}`,
        },
        amountOfRooms: 1 + i,
        traveltimeToOffice: 15 * 60 * (i + 1),
        area: 20 + 10 * i,
        hasSeparateToilet: !(i % 2),
        hasBuiltInKitchen: !(i % 3),
        hasBalcony: !(i % 4),
        hasGarage: !(i % 5),
      });
    }
  }

  getFlats(): Observable<Flat[]> {
    return of(this.flats);
  }

  getFlat(id: string): Observable<Flat | undefined> {
    const flat = this.flats.find((flat) => flat.id === id);
    return of(flat);
  }
}
