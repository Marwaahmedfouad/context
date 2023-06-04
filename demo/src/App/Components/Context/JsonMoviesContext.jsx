
import axios from 'axios';
import React, { useEffect } from 'react';
import { createContext, useState } from "react";

export let JsonMoviesContext = createContext(0);


function JsonMoviesContextProvider(props) {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [original_name, setoriginal_name] = useState('The Pope\'s Exorcist')
    const [poster_path, setposter_path] = useState('/4IjRR2OW2itjQWQnmlUzvwLz9DQ.jpg')
    const [id, setId] = useState('id Must be Unique')
    const [overview, setoverview] = useState('lorem Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit')
    const [form, setForm] = useState({})
    const [submitted, setSubmitted] = useState(false);
    const [isCreated, setIsCreated] = useState(false)

    function handleNewmovie(e) {
        if (e.target.name === 'original_name') {
            setoriginal_name(e.target.value)
            console.log(original_name);
        } else if (e.target.name === 'backdrop_path') {
            setposter_path(e.target.value)
            console.log(poster_path);
        } else if (e.target.name === 'id') {
            setId(e.target.value)
        }
    }

    function handleForm() {
        setSubmitted(true);
        setForm({ original_name, id, poster_path, overview })
    }


    useEffect(() => {
        if (submitted) {
            setMovies([...movies, form]);
            setForm({});
            setSubmitted(false);
            postData()
        }
    }, [submitted, form, movies]);


    // Show Data
    let getData = () => {
        setIsLoading(true);
        axios.get('http://localhost:4000/results')
            .then(res => setMovies(res.data))
            .then(setIsLoading(false))
    }


    // Add Data
    let postData = () => {

        setIsLoading(true)
        axios.post('http://localhost:4000/results', form)
            .then(res => {
                console.log(res);
                if (res.statusText === "Created") {
                    setIsCreated(true)
                }
            })
            .catch(err => console.log(err))
        setIsLoading(false)
    }


    useEffect(() => {
        getData()
        setIsCreated(false)
    }, [])

    // Delete
    function deleteMovie(movieId) {
        axios.delete(`http://localhost:4000/results/${movieId}`)
            .then(res => {
                const updatedMovies = movies.filter((mov) => mov.id !== movieId);
                setMovies(updatedMovies);
            })
            .catch(err => console.log(err))

    }


    return <JsonMoviesContext.Provider value={{ movies, isLoading, getData, postData, deleteMovie, handleForm, handleNewmovie, original_name, isCreated, poster_path, id, overview, setIsLoading }}>
        {props.children}
    </JsonMoviesContext.Provider>
}
export default JsonMoviesContextProvider;




