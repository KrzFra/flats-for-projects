import { Address } from './address.interface';
export interface Flat {
  id: string;
  rent: number;
  address: Address;
  amountOfRooms: number;
  traveltimeToOffice: number;
  area: number;
  hasSeparateToilet: boolean;
  hasBuiltInKitchen: boolean;
  hasBalcony: boolean;
  hasGarage: boolean;
}
