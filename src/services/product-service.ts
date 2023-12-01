import { FetchBaseQueryMeta } from "@reduxjs/toolkit/dist/query/react"
import { IProduct } from "../store/models/IProduct"
import { IProductCard } from "../store/models/product/IProductCard"
import { IProductsWithPagination } from "../store/models/product/IProductsWithPagination"
import { IAddFavoriteRequest } from "../models/IProduct"
import { apiSlice } from "../store/slices/apiSlice"
import { IProductDetailed } from "../store/models/product/IProduct"

export const productAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        fetchProduct: build.query<IProduct, number>({
            query: (id) => ({
                url: '/product?=' + id,
            })
        }),
        addToFavorite: build.mutation<'', IAddFavoriteRequest>({
            query: (credentials) => ({
                url: 'add-favorite',
                method: 'POST',
                body: credentials
            }),
        }),
        getFavorites: build.query<IProductsWithPagination, number>({
            query: (page) => ({
                url: `/favorites?page=${page}`,
                method: 'GET'
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
        removeFavorite: build.mutation<'', number>({
            query: (filterParameters) => ({
                url: `/remove-favorite?id=${filterParameters}`,
                method: 'DELETE'
            }),
        }),
        getProductById: build.query<IProductDetailed, number>({
            query: (id) => ({
                url: `/product?id=${id}`,
                method: 'GET'
            })
        }) 
    })
})

export const { useRemoveFavoriteMutation, 
               useAddToFavoriteMutation, 
               useGetFavoritesQuery,
               useGetProductByIdQuery
} = productAPI;