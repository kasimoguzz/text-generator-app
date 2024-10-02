import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getParafAsync = createAsyncThunk("app/getParafAsync", async ({ number, format }) => {
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${number}&format=${format}`);
    return res.data;
});

export const AppSlice = createSlice({
    name: "app",
    initialState: {
        item: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getParafAsync.fulfilled, (state, action) => {
                state.item = action.payload; // API'den gelen veriyi state'e ekle
            });
    },
});

export default AppSlice.reducer;
