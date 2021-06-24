export interface Flat {
  id: string;
  rent: number;
  address: {
    street: string;
    houseNumber: string;
    zipCode: number;
    city: string;
  };
  amountOfRooms: number;
  traveltimeToOffice: number;
  area: number;
  hasSeparateToilet: boolean;
  hasBuiltInKitchen: boolean;
  hasBalcony: boolean;
  hasGarage: boolean;
}
