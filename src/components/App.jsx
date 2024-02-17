import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Nawigation } from './Nawigation/Nawigation';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieReviews } from './MovieReviews/MovieReviews';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const NotFaundPage = lazy(() => import('../pages/NotFaundPage'));

export const App = () => {
   return (
      <div>
         <Nawigation />
         <Suspense fallback={<b>Loading page...</b>}>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/movies" element={<MoviesPage />} />
               <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                  <Route path="cast" element={<MovieCast />} />
                  <Route path="reviews" element={<MovieReviews />} />
               </Route>
               <Route path="*" element={<NotFaundPage />} />
            </Routes>
         </Suspense>
         <Toaster position="top-right" />
      </div>
   );
};
