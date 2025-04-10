import { createSlice } from "@reduxjs/toolkit";
import { cache } from "react";

const searchSlice=createSlice({
    name: "search",
    initialState: {
        searchResults: {},


    },
    reducers: {
        cacheSearchResults: (state, action) => {
            state=Object.assign(state, action.payload);
        },
    }
})
export const { cacheSearchResults } = searchSlice.actions;
export default searchSlice.reducer;