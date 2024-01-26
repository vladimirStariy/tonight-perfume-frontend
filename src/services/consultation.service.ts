import { ConsultationDto } from "../store/models/consultation/consultation";
import { apiSlice } from "../store/slices/apiSlice"

export const consultationAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        requestConsultation: build.mutation<string, ConsultationDto>({
            query: (credentials) => ({
                url: 'consultation/request-consultation',
                method: 'POST',
                body: credentials
            }),
        })
    })
})

export const { 
    useRequestConsultationMutation
} = consultationAPI;