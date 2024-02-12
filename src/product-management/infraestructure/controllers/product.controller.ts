// <reference path="path/to/file.d.ts" />
import { ProductService } from "../../application/product.service";
import { Body, Controller, Get, Post, Route } from "tsoa";
import { ProductRespositoryPrismaPostgres } from "../product.repository";
import { Product } from "../../domain/product";

@Route("product")
export class ProductController extends Controller {
  private readonly productService: ProductService;
  constructor() {
    super();
    this.productService = new ProductService(
      new ProductRespositoryPrismaPostgres()
    ); // tsoa
  }

  @Get()
  public async getAllProductHandler(): Promise<Product[]> {
    return await this.productService.getAllProduct();
  }

  @Post()
  public async addProductHandler(
    @Body() requestBody: { name: string; price: number }
  ): Promise<Product> {
    const { name, price } = requestBody;
    return await this.productService.addProduct(name, price);
  }
}
