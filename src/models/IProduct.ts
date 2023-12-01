export interface IProduct {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    discount?: boolean;
    discountValue?: number;
}

export interface IAddFavoriteRequest {
    id: number; 
}