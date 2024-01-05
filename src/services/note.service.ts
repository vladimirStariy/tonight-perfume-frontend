import { INote } from "../store/models/notes/INote";
import { apiSlice } from "../store/slices/apiSlice"

export const notesAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getNotes: build.query<INote[], void>({
            query: () => ({
                url: 'get-table-notes',
                method: 'GET'
            }),
        })
    })
})

export const { 
    useGetNotesQuery
} = notesAPI;