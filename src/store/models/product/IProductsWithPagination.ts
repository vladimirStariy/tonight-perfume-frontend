import { IProductCard } from "./IProductCard";

export interface IProductsWithPagination {
    pagination: {
        count: number;
        hasNext: boolean;
        hasPrevious: boolean;
        currentPage: number;
        totalPages: number;
    }
    items: IProductCard[];
}