import { IAromaGroup } from "../aroma-group/IAromaGroup";
import { IBrand } from "../brand/IBrand";
import { ICategory } from "../category/ICategory";
import { INote } from "../notes/INote";

export interface IFilter {
    brands: IBrand[],
    aromaGroups: IAromaGroup[],
    categories: ICategory[],
    perfumeNotes: INote[],
    countries: string[],
    minPrice: number,
    maxPrice: number
}