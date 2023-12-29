export interface TableProduct {
    productId: number;
    name: string;
    brand: string;
    category: string;
}

export interface ProductProperties {
    aromaGroups: AromaGroup[];
    perfumeNotes: PerfumeNote[];
    categories: Category[];
    brands: Brand[];
}

interface Brand {
    brand_ID: number;
    name: string;
}

interface Category {
    category_ID: string;
    name: string;
}

interface PerfumeNote {
    note_ID: number;
    name: string;
    type: string;
}

interface AromaGroup {
    aromaGroup_ID: number;
    aromaGroup_Name: string;
}