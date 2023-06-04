
import React, { useContext } from 'react';
import { JsonMoviesContext } from '../Context/JsonMoviesContext';
import { UpdateMovieContext } from '../Context/UpdateMovieContext';


const UpdateMovie = () => {
    const { isCreated } = useContext(JsonMoviesContext);

    const { selectedMovie, changeinput, handleSubmit } = useContext(UpdateMovieContext);

    return (
        <>
            <div className='w-50 mx-auto'>
                <h3>Update Movie</h3>
                <form>
                    <label name='original_title' className='mb-1'> Title </label>
                    <input defaultValue={selectedMovie.original_name} onChange={changeinput} className='form-control mb-2 bg-dark text-white' type='text' name='original_name' id='original_name' ></input>

                    <label name='poster_path' className='mt-3 mb-1'> poster_path </label>
                    <input defaultValue={selectedMovie.poster_path} onChange={changeinput} className='form-control mb-2 bg-dark text-white' type='text' name='poster_path' id='poster_path' ></input>

                    <label name='id' className='mt-3 mb-1'> id </label>
                    <input
                        defaultValue={selectedMovie.id} onChange={changeinput}
                        className='form-control mb-2 bg-dark text-white' type='text' name='id' id='id' ></input>

                    <label name='overview' className='mt-3 mb-1'>
                        overview
                    </label>
                    <textarea defaultValue={selectedMovie.overview} onChange={changeinput} className='form-control mb-2 bg-dark text-white' type='text' name='overview' id='overview' ></textarea>
                    <div className='text-center'>
                        <button type='button' onClick={handleSubmit} className='btn btn-outline-success w-25' >Save </button>
                    </div>
                    {isCreated ? (
                        <div className='alert alert-success text-center'> Updated </div>)
                        : null}
                </form>
            </div>
        </>
    );
};

export default UpdateMovie;