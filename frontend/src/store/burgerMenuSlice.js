import { createSlice } from "@reduxjs/toolkit";

const burgerMenuSlice = createSlice({
    name: "burgerMenu",
    initialState: {
        isActive: false
    },
    reducers: {
        toggleBurger(state, action) {
            console.log(state);
            console.log(action);
            state.isActive = action.payload
        }, 
    }
})

export const {toggleBurger} = burgerMenuSlice.actions
export default burgerMenuSlice.reducer;
