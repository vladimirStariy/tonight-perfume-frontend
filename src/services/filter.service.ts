import { FetchBaseQueryMeta } from "@reduxjs/toolkit/dist/query/react"
import { IFilter } from "../store/models/filter/IFilter"
import { IFilterRequest } from "../store/models/filter/IFIlterRequest"
import { IProductCard } from "../store/models/product/IProductCard"
import { IProductsWithPagination } from "../store/models/product/IProductsWithPagination"
import { apiSlice } from "../store/slices/apiSlice"

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
        })
    })
})

export const { useSendFilterMutation, 
               useFetchFilterQuery
} = filterAPI;