import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IBrandSimple } from "../store/models/brand/IBrandSimple"
import { BASE_URL } from "../utils/http-config"

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        
    })
})