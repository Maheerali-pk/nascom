interface PutOnSaleRequest {
   resourceId: string;
   username: string;
}
interface BuyResourceRequest {
   resourceId: string;
}

export const putResourceOnSale = (data: PutOnSaleRequest) => {};

export const removeResourceFromSale = (data: PutOnSaleRequest) => {};

export const buyResourceFromSale = (data: BuyResourceRequest) => {};
