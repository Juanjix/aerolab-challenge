export interface User {
  id: string;
  name: string;
  createAt: string;
  points: number;
  reedemHistory: string[];
}
export interface Product {
  _id: string;
  name: string;
  description?: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
}
