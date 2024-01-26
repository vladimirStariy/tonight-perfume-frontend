export interface IProductCard {
    id: number;
    name: string;
    brand: string;
    price: number;
    prices: [];
    discount: number;
    isFavorite: boolean;
    imagePath: string;
    isForOrder: boolean;
}