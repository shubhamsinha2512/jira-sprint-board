import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import saveStateToLocalStorage from './middleware/SaveToLocalStorageMiddleware'

//Load State from LocalStorage
const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state from localStorage:", e);
        return undefined;
    }
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveStateToLocalStorage),
    preloadedState: loadStateFromLocalStorage()
})

export default store;