
import axios from "axios";
import ImoviesItem from "../models/ImoviesItem";

const baseUrl=process.env.REACT_APP_API_BASE_URL;

const getItems =async () => {
    const response = await axios.get<ImoviesItem[]>(`${baseUrl}/movies-coming`);
    return response.data;
}

const getInTheatreItems =async () => {
    const response = await axios.get<ImoviesItem[]>(`${baseUrl}/movies-in-theaters`);
    return response.data;
}

const getTopRatedIndiaItems =async () => {
    const response = await axios.get<ImoviesItem[]>(`${baseUrl}/top-rated-india`);
    return response.data;
}

const getTopRatedItems =async () => {
    const response = await axios.get<ImoviesItem[]>(`${baseUrl}/Top-Rated-Movies`);
    return response.data;
}

const getFavouriteItems =async () => {
    const response = await axios.get<ImoviesItem[]>(`${baseUrl}/favourit`);
    return response.data;
}


const getMovieById = ( id : number ) => {
    return axios.get<ImoviesItem>( `${process.env.REACT_APP_API_BASE_URL}/movies-coming/${id}` )
            .then( response => response.data )
};

export {
 getItems,
 getInTheatreItems,
 getTopRatedIndiaItems,
 getTopRatedItems,
 getFavouriteItems,
 getMovieById,
 
};