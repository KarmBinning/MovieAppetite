import axios from 'axios';
import { MovieSearch } from "./movie";
import React from 'react'

type Props = {}

export const searchMovies = async (query: string) => {
    try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`,
        data = await axios.get(
            url,
            {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY,
                    Accept: 'application/json;charset=utf-8'
                }
            }
        );
        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Axios error message: ', error.message);
            return error;
        }
        else {
            console.log('Unexpected error: ', error);
            return "An unexpected error occurred.";
        }
    }
};

//export default api