import { ILoginRequest, ILoginResponse, IRegistrationRequest, IRegistrationResponse } from "../store/models/auth/auth.model"
import { apiSlice } from "../store/slices/apiSlice";

export const authAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<ILoginResponse, ILoginRequest>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: {...credentials}
            }),
        }),
        register: build.mutation<IRegistrationResponse, IRegistrationRequest>({
            query: (credentials) => ({
                url: 'register',
                method: 'POST',
                body: credentials
            }),
        }),
        refresh: build.query<string, ''>({
            query: () => ({
                url: 'refresh',
                method: 'GET'
            })
            
        })
    })
})

export const { useLoginMutation, useRegisterMutation, useRefreshQuery } = authAPI;