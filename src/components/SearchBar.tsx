import React, { useState } from 'react';
import { setBooks, setLoading } from '../store/Slices/bookSlice';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../services/BookServices';
import { showMessage } from '../utils/NotificationUtils';

const SearchBar: React.FC = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearch = async () => {
        dispatch(setLoading(true));
        if (!search) {
            dispatch(setLoading(false));
            return;
        }
        try {
            const response = await searchBooks(search);
            dispatch(setBooks(response));
            dispatch(setLoading(false));
            showMessage("Searched successfully", 'success');

        }
        catch (error) {
            dispatch(setLoading(false));
            showMessage("Book not found", 'error');
            console.error("Error fetching books:", error);
        }
    };

    return (
        <div className="flex items-center space-x-2 p-4">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search books..."
                className="border rounded-md p-2 w-full"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
