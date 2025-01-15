export interface Product {
  [x: string]: any;
  product: {
    _id: string;
    name: string;
    description: string;
    imagePath: string;
    price: number;
    ingredients: {
      name: string;
      icon: string;
      _id: string;
    }[];
  };
}
