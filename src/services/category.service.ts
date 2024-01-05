import { ICategory } from "../store/models/category/ICategory";
import { apiSlice } from "../store/slices/apiSlice"

export const categoryAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query<ICategory[], void>({
            query: () => ({
                url: 'categories',
                method: 'GET'
            }),
        })
    })
})

export const { 
    useGetCategoriesQuery
} = categoryAPI;