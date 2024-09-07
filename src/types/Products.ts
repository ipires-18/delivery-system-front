interface Ingredient {
  _id: string;
  name: string;
  icon: string;
}

export interface Products {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredient[];
  category: string;
}
