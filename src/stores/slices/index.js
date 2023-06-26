import { configureStore } from "@reduxjs/toolkit";
import { ReduxSlices } from "./ReduxSlices";
const store = configureStore({
    reducer: {
        users:ReduxSlices.reducer
    }
})
export default store;