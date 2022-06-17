import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: { value: number; }) => {
            state.value += 1;
        },
    },
});
export const { increment } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
