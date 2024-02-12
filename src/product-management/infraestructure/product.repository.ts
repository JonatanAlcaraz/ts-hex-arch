import { IProductRepository } from "../domain/interfaces/product.interface";
import { Product } from "../domain/product";
import prisma from "../../../prisma";

export class ProductRespositoryPrismaPostgres implements IProductRepository {
    
    public async getAllProducts(): Promise<Product[]> {
        return await prisma.product.findMany()
    }

    public async addProduct(product: Product): Promise<Product> {
        return await prisma.product.create({
            data: {
                name: product.name,
                price: product.price
            }
        })
    }

}