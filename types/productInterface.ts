export interface ProductInterface {
    id: string;
    name: string;
    orderId: string;
    price: number;
    updatedAt: string;
    details: {
        category?: string;
        sizeStock?: Array<SizeStock>
    };
}

export type SizeStock = {
    size: string,
    quantity: number;
}