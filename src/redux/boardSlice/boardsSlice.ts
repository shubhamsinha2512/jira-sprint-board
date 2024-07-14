import { createSlice } from "@reduxjs/toolkit";
import { IBoard, ICreateBoard, ITicket } from "../../interface/interfaces";
import { v4 as uuid } from 'uuid';

const initialState: IBoard[] = [];

const boardsSlice = createSlice({
    name: "boards",
    initialState: initialState,
    reducers: {
        addBoard: (state, action) => {
            const boardRequest: ICreateBoard = action.payload;

            const newBoard: IBoard = {
                id: uuid(),
                name: boardRequest.name,
                slug: boardRequest.name.toLowerCase().replace(/ /g, "-"),
                manager: boardRequest.manager,
                columns: action.payload.columns,
                tickets: []
            }

            state.push(newBoard);
        },
    }
})

export const { addBoard } = boardsSlice.actions;
export default boardsSlice.reducer;