"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Async thunk to fetch office data
export const fetchOfficeData = createAsyncThunk("office/fetchOfficeData",
    async () => {
        const response = await axios.get("http://127.0.0.1:8000/office/");
        return response.data[0]; // Assuming we want the first office       
    });

const officeSlice = createSlice({   
    name: "office",
    initialState: {
        officeData: {},
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOfficeData.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchOfficeData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.officeData = action.payload;
        }); 
        builder.addCase(fetchOfficeData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});
export default officeSlice.reducer;