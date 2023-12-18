import { FetchBaseQueryMeta } from "@reduxjs/toolkit/dist/query/react"
import { IFilter } from "../store/models/filter/IFilter"
import { IFilterRequest } from "../store/models/filter/IFIlterRequest"
import { IProductCard } from "../store/models/product/IProductCard"
import { IProductsWithPagination } from "../store/models/product/IProductsWithPagination"
import { apiSlice } from "../store/slices/apiSlice"
import { IBrand } from "../models/IBrand"
import { INote } from "../models/INote"
import { IGroup } from "../models/IGroup"
import { ICountry } from "../models/ICountry"

export const filterAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        fetchFilter: build.query<IFilter, number>({
            query: (count) => ({
                url: `/filter?count=${count}`
            })
        }), 
        sendFilter: build.mutation<IProductsWithPagination, IFilterRequest>({
            query: (filterParameters) => ({
                url: `/filter-requ`,
                method: 'POST',
                body: filterParameters
            }),
            transformResponse: (apiResponse: IProductCard[], meta: FetchBaseQueryMeta): IProductsWithPagination => {
                return {
                    pagination: {
                        count: Number(meta?.response?.headers.get('X-Pages-Count')),
                        hasNext: Boolean(meta?.response?.headers.get('X-Pages-HasNext')),
                        hasPrevious: Boolean(meta?.response?.headers.get('X-Pages-HasPrevious')),
                        currentPage: Number(meta?.response?.headers.get('X-Pages-CurrentPage')),
                        totalPages: Number(meta?.response?.headers.get('X-Pages-TotalPages'))
                    },
                    items: apiResponse,
                }
            }
        }),
        fetchFilterBrands: build.mutation<IBrand[], void>({
            query: () => ({
                url: `/sorted-brands`,
                method: 'GET'
            })
        }), 
        fetchFilterNotes: build.mutation<INote[], void>({
            query: () => ({
                url: `/sorted-notes`,
                method: 'GET'
            })
        }), 
        fetchFilterGroups: build.mutation<IGroup[], void>({
            query: () => ({
                url: `/sorted-groups`,
                method: 'GET'
            })
        }), 
        fetchFilterCountries: build.mutation<ICountry[], void>({
            query: () => ({
                url: `/sorted-countries`,
                method: 'GET'
            })
        }), 
        getPopularProducts: build.query<IProductCard[], void>({
            query: () => ({
                url: `/popular-products`,
                method: 'GET'
            }),
        }),
    })
})

export const { useSendFilterMutation, 
               useFetchFilterQuery,
               useFetchFilterBrandsMutation,
               useFetchFilterGroupsMutation,
               useFetchFilterNotesMutation,
               useFetchFilterCountriesMutation,
               useGetPopularProductsQuery
} = filterAPI;