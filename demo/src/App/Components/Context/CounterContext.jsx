import axios from 'axios';
import React, { useEffect } from 'react';
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';


export let counterContext = createContext(0);

function ConterContextProvider(props) {

  const [movies, setMovies] = useState([])


  const getNews = async () => {
    // setIsLoading(true);
    let { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=469c18b93c9a4c19cb97c1850d65f263');
    // setIsLoading(false);
    // console.log(data);
    setMovies(data.results)
  }

  // useEffect(() => {
  //   getNews().then(console.log(movies))
  // }, [])


  return <counterContext.Provider value={{ movies }}>
    {props.children}
  </counterContext.Provider>
}
export default ConterContextProvider;