import { createSlice } from "@reduxjs/toolkit";
import { IMasterData } from "../interface/interfaces";

const initialState: IMasterData = {
    users: [
        {
            "id": "c1bfa902-5b9e-4b67-92a4-5f87d8d1b55e",
            "name": "Shubham",
            "email": "shubham@gmail.com",
            "role": "manager"
        },
        {
            "id": "a72e56d2-7c4a-4e9b-b983-6b67e4e5c8f3",
            "name": "Raj",
            "email": "raj@gmail.com",
            "role": "user"
        },
        {
            "id": "e7a04c9a-3a55-4e9a-9d7a-3c9d5f8a7e3f",
            "name": "Shalini",
            "email": "shalini@gmail.com",
            "role": "manager"
        },
        {
            "id": "f5e8c007-0bd2-4727-b1a5-7a2c0b504b7a",
            "name": "Priya",
            "email": "priya@gmail.com",
            "role": "manager"
        },
        {
            "id": "d4d707f9-8e4b-48a6-bf87-8a6d0c9d6e6a",
            "name": "Neha",
            "email": "neha@gmail.com",
            "role": "user"
        },
        {
            "id": "e7a04c9a-3a55-4e9a-9d7a-3c9d5f8a7e3e",
            "name": "Amit",
            "email": "amit@gmail.com",
            "role": "user"
        }
    ],
    storyPoints: [
        {
            "id": "1",
            "name": 1
        },
        {
            "id": "2",
            "name": 2
        },
        {
            "id": "3",
            "name": 3
        },
        {
            "id": "5",
            "name": 5
        },
        {
            "id": "8",
            "name": 8
        },
        {
            "id": "13",
            "name": 13
        },
        {
            "id": "21",
            "name": 21
        },
    ]
};

const masterDataSlice = createSlice({
    name: "masterdata",
    initialState: initialState,
    reducers: {}
})

export default masterDataSlice.reducer;