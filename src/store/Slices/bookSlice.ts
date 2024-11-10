import { createSlice } from "@reduxjs/toolkit";
import { Book, PaginationTypes } from "../../types/Book";

export interface BookState {
    books: Book;
    loading: boolean;
    paginationData: PaginationTypes
}

const initialState: BookState = {
    books: {} as Book,
    loading: false,
    paginationData: {} as PaginationTypes
};

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setBooks: (state, actions) => {
            state.books = actions.payload
        },
        setPaginationData: (state, actions) => {
            state.paginationData = actions.payload
        },
    }
})
export const { setLoading, setBooks, setPaginationData } = bookSlice.actions;
export default bookSlice.reducer;