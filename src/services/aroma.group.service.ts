import { IAromaGroup } from "../store/models/aroma-group/IAromaGroup";
import { apiSlice } from "../store/slices/apiSlice"

export const groupAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getGroups: build.query<IAromaGroup[], void>({
            query: () => ({
                url: 'aroma-groups',
                method: 'GET'
            }),
        })
    })
})

export const { 
    useGetGroupsQuery
} = groupAPI;