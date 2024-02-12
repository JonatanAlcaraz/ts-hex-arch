import { Product } from "../product";

export interface IProductRepository {
    getAllProducts(): Promise<Product[]>
    addProduct(product: Product): Promise<Product>
}