import { createSlice } from "@reduxjs/toolkit";
import { IBoard, ICreateBoard, ICreateTicket, ITicket, IUpdateTicketStatus } from "../../interface/interfaces";
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
                columns: action.payload.columns?.map((column: string) => ({ id: uuid(), name: column })) || [],
                tickets: []
            }

            state.push(newBoard);
        },
        addTicket: (state, action) => {
            const ticketRequest: ICreateTicket = action.payload;

            const boardIndex: number = state.findIndex(
                (board) => board.id === ticketRequest.boardId
            );

            const ticket: ITicket = {
                id: uuid(),
                boardId: ticketRequest.boardId,
                title: ticketRequest.title,
                description: ticketRequest.description,
                assignee: ticketRequest.assignee,
                status: ticketRequest.status,
                storyPoint: ticketRequest.storyPoints!,
                labels: ticketRequest.labels!,
                priority: ticketRequest.priority!,
                dueDate: ticketRequest.dueDate!,
            } as ITicket;

            state[boardIndex].tickets.push(ticket);
        },
        moveTicket: (state, action) => {
            const moveEvent: IUpdateTicketStatus = action.payload;
            const boardIndex: number = state.findIndex(
                (board) => board.id === moveEvent.boardId
            );
            const ticketIndex: number = state[boardIndex].tickets.findIndex(
                (ticket) => ticket.id === moveEvent.ticketId
            );
            state[boardIndex].tickets[ticketIndex].status = moveEvent.nextTicketStatus;
        }
    }
})

export const { addBoard, addTicket, moveTicket } = boardsSlice.actions;
export default boardsSlice.reducer;