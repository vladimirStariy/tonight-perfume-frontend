import { BaseQueryApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { BASE_URL } from "../../utils/http-config";
import { RootState } from "../store";
import type {BaseQueryFn, FetchArgs, FetchBaseQueryError} from '@reduxjs/toolkit/query'
import { logOut, setCredentials } from "./authSlice";
import { createApi } from "@reduxjs/toolkit/dist/query/react";


const baseQuery = fetchBaseQuery({
    credentials: "include",
    mode: 'cors',
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.access;
        if(token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
})

const baseQueryWithReauth: 
    BaseQueryFn<string | FetchArgs, 
    unknown, 
    FetchBaseQueryError
> = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        if (refreshResult.data) {
            api.dispatch(setCredentials({access: (refreshResult.data as {access: string}).access}))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})