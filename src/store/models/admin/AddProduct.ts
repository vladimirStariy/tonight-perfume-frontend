export interface AddProductDto {
    name: string;
    description: string;
    year: string;
    country: string;
    category: number;
    brand: number;
    groups: number[];
    upperNotes: number[];
    middleNotes: number[];
    bottomNotes: number[];
    isPopular: boolean;
    prices: Price[]
}

interface Price {
    volumeId: number;
    priceValue: number;
}