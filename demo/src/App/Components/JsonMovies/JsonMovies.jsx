import React, { useContext } from 'react';
import { JsonMoviesContext } from '../Context/JsonMoviesContext';
import { useNavigate } from 'react-router-dom';
import { UpdateMovieContext } from '../Context/UpdateMovieContext';

const JsonMovies = () => {
    let navigate = useNavigate()
    let { movies, isLoading, deleteMovie } = useContext(JsonMoviesContext)
    let { handleSelectedMovie } = useContext(UpdateMovieContext)

    const handleUpdateButton = (mov) => {
        handleSelectedMovie(mov)
        navigate('/UpdateMovie')
    }

    return (
        <>

            <div>
                <div className='text-center my-5'>
                </div>
                <div className='container mx-auto row text-teal text-center gx-5 gy-5'>
                    {isLoading === true ? <div> <h1>Loading <i className='fas fa-spinner fa-spin'></i></h1> </div> :
                        movies.map((mov) =>
                            <div className='col-md-4' key={mov.id}>
                                <img src={'https://image.tmdb.org/t/p/w500/' + mov.poster_path} className='w-100' alt='Img' />
                                <h5 className='text-center my-3'>{mov.original_name}</h5>
                                <p className='text-secondary'>{mov.overview ? mov.overview.split('').splice(0, 20).join('') : null}...</p>
                                <button className='btn btn-danger w-50' onClick={() => deleteMovie(mov.id)}>Delete</button>
                                <button className='btn btn-warning w-50' onClick={() => handleUpdateButton(mov)}>Update</button>
                            </div>
                        )}
                </div>
            </div>



        </>
    )
}

export default JsonMovies;
