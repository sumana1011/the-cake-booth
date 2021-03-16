export interface Product {
  [x: string]: any;
  pid: number;
  image: string;
  name: string;
  price: string;
  newPrice?: string;
  isFav: boolean;
  inCart: boolean;
}
