export class Product {
  productId: number;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    if (price < 0) {
      throw new Error("the price cannot be less than 0");
    }
    this.productId = -1;
    this.name = name;
    this.price = price;
  }
}
