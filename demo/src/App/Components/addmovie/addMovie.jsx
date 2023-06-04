import React, { useContext } from 'react';
import { JsonMoviesContext } from '../Context/JsonMoviesContext';

const AddMovie = () => {
    let { isCreated, handleNewmovie, handleForm, original_title, poster_path, id, overview } = useContext(JsonMoviesContext)

    return (
        <>
            <div className='w-50 mx-auto py-4'>
                <h3>Register Now</h3>
                <form >
                    <label name='original_name' className='mt-3 mb-1'>Title</label>
                    <input defaultValue={original_title} onInput={handleNewmovie} className='form-control mb-2 ' type='text' name='original_name' id='original_name'></input>

                    <label name='backdrop_path' className='mt-3 mb-1'>backdrop path</label>
                    <input defaultValue={poster_path} onInput={handleNewmovie} className='form-control mb-2 ' type='text' name='backdrop_path' id='backdrop_path'></input>

                    <label name='id' className='mt-3 mb-1'>id</label>
                    <input defaultValue={id} onInput={handleNewmovie} className='form-control mb-2 ' type='text' name='id' id='id'></input>

                    <label name='overview' className='mt-3 mb-1'>overview</label>
                    <input defaultValue={overview} onInput={handleNewmovie} className='form-control mb-2 ' type='text' name='overview' id='overview'></input>

                    <div className='text-center'>
                        <button onClick={handleForm} type='button' className='btn btn-outline-success   '>Add</button>
                    </div>
                    {isCreated ? <div className='alert alert-primary text-center'>Success</div> : null}
                </form>
            </div>
        </>
    );
}

export default AddMovie;
