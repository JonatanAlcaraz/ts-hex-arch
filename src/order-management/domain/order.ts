export class Order {
    orderId: number;
    total: number;
    productId: number;
    createdAt: Date;

    constructor(productId: number, total: number) {

        if (total > 3) {
            throw new Error("orders with more than 3 products are not allowed")
        }

        this.orderId = -1; // prisma take -1 as autoincremental
        this.productId = productId;
        this.total = total;
        this.createdAt = new Date();
    }
}