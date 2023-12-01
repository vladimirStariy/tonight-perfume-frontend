import { IUserOrderCard } from "../store/models/order/order";
import { IAdress, IProfileData, IUpdateProfile } from "../store/models/profile/profile";
import { apiSlice } from "../store/slices/apiSlice";

export const profileAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getProfileData: build.query<IProfileData, void>({
            query: () => ({
                url: 'profile-data',
                method: 'GET'
            }),
        }),
        removeAdress: build.mutation<string, number>({
            query: (id) => ({
                url: `delete-adress?id=${id}`,
                method: 'DELETE',
            }),
        }),
        addAdress: build.mutation<void, IAdress>({
            query: (credentials) => ({
                url: 'create-adress',
                method: 'POST',
                body: credentials
            }),
        }),
        getOrders: build.query<IUserOrderCard[], void>({
            query: () => ({
                url: 'orders',
                method: 'GET'
            }),
        }),
        updateProfileData: build.mutation<void, IUpdateProfile>({
            query: (credentials) => ({
                url: 'update-profile',
                method: 'POST',
                body: credentials
            })
        })
    })
})

export const { useGetProfileDataQuery,  
               useAddAdressMutation,
               useRemoveAdressMutation,
               useUpdateProfileDataMutation,
               useGetOrdersQuery } = profileAPI;