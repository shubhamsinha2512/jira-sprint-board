import { combineSlices } from "@reduxjs/toolkit";
import activeBoardReducer from "./boardSlice/activeBoardSlice";
import boardsReducer from "./boardSlice/boardsSlice";
import masterDataSlice from "./masterDataSlice";


const rootReducer = combineSlices({
    activeBoardId: activeBoardReducer,
    boards: boardsReducer,
    masterData: masterDataSlice
});

export default rootReducer;