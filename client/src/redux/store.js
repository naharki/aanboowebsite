"use client";

import { configureStore } from '@reduxjs/toolkit';
import officeReducer from './officeSlice';
const store = configureStore({
    reducer: {
        office: officeReducer,  
    },
});
export default store;