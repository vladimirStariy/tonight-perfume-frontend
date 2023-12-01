export interface IFilterRequest {
    page: number,
    volumes: number[],
    prices: number[],
    brands: number[],
    aromaGroups: number[],
    categories: number[],
    perfumeNotes: number[],
    countries: string[]
}