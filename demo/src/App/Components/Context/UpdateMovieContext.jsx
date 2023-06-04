
import axios from 'axios';
import React, { useContext } from 'react';
import { createContext, useState } from "react";
import { JsonMoviesContext } from './JsonMoviesContext';


export let UpdateMovieContext = createContext(0);

function UpdateMovieProvider(props) {


    const { setIsLoading } = useContext(JsonMoviesContext);
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [updatedMovie, setUpdatedMovie] = useState(selectedMovie);
    const [id, setId] = useState(null);

    const handleSelectedMovie = (mov) => {
        setSelectedMovie(mov);
        setId(mov.id)
    }

    const changeinput = (e) => {
        let newValues = { ...selectedMovie };
        newValues[e.target.name] = e.target.value;
        setUpdatedMovie(newValues);
    };

    const handleSubmit = () => {
        setIsLoading(true);
        axios.put(`http://localhost:4000/results/${id}`, updatedMovie)
            .then(res => {
                console.log(res);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            })
    }

    return <UpdateMovieContext.Provider value={{ handleSelectedMovie, selectedMovie, setSelectedMovie, changeinput, handleSubmit }} >
        {props.children}
    </UpdateMovieContext.Provider>
}
export default UpdateMovieProvider;




