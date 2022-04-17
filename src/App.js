import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MovieDetail } from './pages/MovieDetail';

export const App = () => {
  return(
    <BrowserRouter>
        <Routes>
            <Route path='/*' element={<HomePage/>}></Route>
            <Route path='/movie/:movieId'  element={<MovieDetail/>}></Route>

        </Routes>
    </BrowserRouter>
  )
}
