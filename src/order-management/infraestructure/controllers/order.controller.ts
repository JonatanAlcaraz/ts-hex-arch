// <reference path="path/to/file.d.ts" />
import { OrderService } from "../../application/order.service"
import { Body, Controller, Post, Route } from "tsoa"
import { OrderRespositoryPrismaPostgres } from "../order.repository";
import { Order } from "../../domain/order";

@Route("order")
export class OrderController extends Controller {
    private readonly orderService: OrderService;
    constructor(){
        super();
        this.orderService = new OrderService( new OrderRespositoryPrismaPostgres() ) // tsoa  
    }

    @Post()
    public async addOrderHandler(
        @Body() requestBody: {productId: number, total: number} 
    ) : Promise<Order> {
            const {productId, total} = requestBody;
            return await this.orderService.addOrder(productId, total)
        }   
}