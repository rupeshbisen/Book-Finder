import axios from "axios";

const env = import.meta.env;

export const baseUrl = env.VITE_BACKEND_API_URL;

export const searchBooks = async (bookTitle: string) => {
    try {
        const response = await axios.get(`${baseUrl}search.json?title=${bookTitle}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};