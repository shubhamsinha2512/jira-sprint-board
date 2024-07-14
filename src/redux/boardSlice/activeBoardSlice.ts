import { createSlice } from "@reduxjs/toolkit";
import { IBoard, ITicket } from "../../interface/interfaces";
import { v4 as uuid } from 'uuid';

const initialState: IBoard = {} as IBoard;

const activeBoardSlice = createSlice({
    name: "activeBoard",
    initialState: initialState,
    reducers: {
        addTicket: (state, action) => {
            const ticket: ITicket = {
                id: uuid(),
                columnId: action.payload.columnId,
                title: action.payload.title,
                description: action.payload.description,
                assignee: action.payload.assignee,
                status: action.payload.status,
                storyPoint: action.payload.storyPoint,
                labels: action.payload.labels,
                priority: action.payload.priority,
                dueDate: action.payload.dueDate,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt
            }

            state.tickets.push(ticket);
        },
    }
})

export const { addTicket } = activeBoardSlice.actions;
export default activeBoardSlice.reducer;