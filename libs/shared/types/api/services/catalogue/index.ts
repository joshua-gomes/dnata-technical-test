export type CatalogueItemType = {
  id: number;
  imageSrc: string;
  title: string;
  starRating: number;
  userRating: number;
  whatsIncluded: string[];
  totalPrice: number;
  pricePerPerson: number;
};

export type CatalogueItemsType = CatalogueItemType[];
