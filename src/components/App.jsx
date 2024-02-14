import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Nawigation } from './Nawigation/Nawigation';
import MoviesPage from '../pages/MoviesPage';
import HomePage from '../pages/HomePage';
import NotFaundPage from '../pages/NotFaundPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieReviews } from './MovieReviews/MovieReviews';

export const App = () => {
   return (
      <div>
         <h1>Trending today</h1>
         <Nawigation />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
               <Route path="cast" element={<MovieCast />} />
               <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFaundPage />} />
         </Routes>
         <Toaster position="top-right" />
      </div>
   );
};
