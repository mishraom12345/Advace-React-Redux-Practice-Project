import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import uiSlice from "./UiSlice";

const store = configureStore({
    reducer:{ui:uiSlice.reducer,cart:cartSlice.reducer}
})


export default store