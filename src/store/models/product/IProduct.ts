export interface IProductDetailed {
    id: number;
    name: string;
    description: string;
    prices: Price[];
    year: string;
    country: string;
    category: Category;
    brand: Brand;
    aromaGroups: AromaGroup[];
    perfumeNotes: ProductNotes[];
    imagePath: string;
}

interface Brand {
    brand_ID: number;
    name: string;
}

interface Price {
    price_ID: number;
    product_ID: number;
    volume_ID: number;
    value: number;
}

interface Category {
    category_ID: number;
    name: string;
}

interface AromaGroup {
    aromaGroup_ID: number;
    aromaGroup_Name: string;
}

interface ProductNotes {
    note_ID: number;
    noteType: string;
    perfumeNote: PerfumeNote;
}

interface PerfumeNote {
    note_ID: number;
    name: string;
}