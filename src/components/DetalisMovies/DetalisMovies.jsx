import { NavLink, useLocation } from 'react-router-dom';
import css from './DetalisMovies.module.css';
export const DetalisMovies = ({ search }) => {
   const location = useLocation();
   return (
      <div className={css.wrap}>
         <ul className={css.List}>
            {search.map(movie => (
               <li key={movie.id} className={css.Item}>
                  <h2>{movie.title}</h2>
                  <NavLink to={`/movies/${movie.id}`} state={location} className={css.linkImg}>
                     <img src={movie.poster_url} alt={movie.title} />
                  </NavLink>
                  <p>{movie.release_date}</p>
               </li>
            ))}
         </ul>
      </div>
   );
};
