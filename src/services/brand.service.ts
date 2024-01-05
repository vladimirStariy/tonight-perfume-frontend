
import { IBrand } from "../store/models/brand/IBrand";
import { apiSlice } from "../store/slices/apiSlice"

export const brandAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getBrands: build.query<IBrand[], void>({
            query: () => ({
                url: `/brands`,
                method: 'GET'
            })
        }),
        createBrand: build.mutation<void, FormData>({
            query: (content) => ({
                url: `/create-brand`,
                method: 'POST',
                body: content
            })
        }),
    })
})

export const { 
    useGetBrandsQuery,
    useCreateBrandMutation
} = brandAPI;