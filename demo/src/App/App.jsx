import React from 'react'
import MainLayout from './Components/MainLayout/MainLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Components/Error/Error';
import JsonMovies from './Components/JsonMovies/JsonMovies';
import JsonMoviesContextProvider from './Components/Context/JsonMoviesContext';
import AddMovie from './Components/addmovie/addMovie';
import UpdateMovieProvider from './Components/Context/UpdateMovieContext';
import UpdateMovie from './Components/UpdateMovie/UpdateMovie';

const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            { index: "true", element: <JsonMovies /> },
            { path: "addMovie", element: <AddMovie /> },
            { path: "updateMovie", element: <UpdateMovie /> },
            { path: "*", element: <Error /> }
        ]
    },
])

const App = () => {
    return <>
        <JsonMoviesContextProvider>
            <UpdateMovieProvider>
                    <RouterProvider router={routes} />
            </UpdateMovieProvider>
        </JsonMoviesContextProvider>
    </>
}

export default App;
