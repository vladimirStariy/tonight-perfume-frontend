import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface iAuthState {
    access: string | null;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {access: null} as iAuthState,
    reducers: {
        setCredentials: (state, {payload: { access } }: PayloadAction<{access: string}>) => {
            state.access = access;
        },
        getCredentials: (state) => {
            console.log(state);
        },
        logOut: (state) => {
            state.access = null;
        } 
    }
})

export const { setCredentials, logOut, getCredentials } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentToken = (state: RootState) => state.auth.access;