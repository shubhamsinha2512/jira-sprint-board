import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const activeBoardSlice = createSlice({
    name: "activeBoard",
    initialState: initialState,
    reducers: {
        setActiveBoardId(state, action) {
            return action.payload;
        },
    }
})

export const { setActiveBoardId } = activeBoardSlice.actions;
export default activeBoardSlice.reducer;