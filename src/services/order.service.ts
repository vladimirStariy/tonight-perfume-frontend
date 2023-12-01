import { apiSlice } from "../store/slices/apiSlice"
import { IOrder } from "../store/models/order/order";

export interface IPromocode {
    promocode: string;
}

export const orderAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        createOrderUnauthorized: build.mutation<void, IOrder>({
            query: (credentials) => ({
                url: 'create-order-unauthorized',
                method: 'POST',
                body: credentials
            }),
        }),
        getPromocodeData: build.mutation<string, IPromocode>({
            query: (promocode) => ({
                url: 'get-promocode-data',
                method: 'POST',
                body: promocode
            })
            
        })
    })
})

export const { useCreateOrderUnauthorizedMutation,
               useGetPromocodeDataMutation } = orderAPI;