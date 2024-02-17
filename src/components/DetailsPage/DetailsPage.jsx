import { NavLink } from 'react-router-dom';

import css from './DetailsPage.module.css';

export const DetailsPage = ({ detalis }) => {
   return (
      <div className={css.container}>
         <div className={css.wrapper}>
            <div className={css.wrapImg}>
               <img src={detalis.poster_url} alt={detalis.title} />
            </div>
            <div className={css.information}>
               <div>
                  <h2>
                     {detalis.title} <span>({detalis.release_date})</span>
                  </h2>
                  <p>User Score:{Math.floor(detalis.popularity)}%</p>
               </div>
               <div>
                  <h3>Overview</h3>
                  <p>{detalis.overview}</p>
               </div>
               <div>
                  <h3>Genres</h3>
                  <p>{detalis.genres[0].name}</p>
               </div>
            </div>
         </div>
         <div className={css.detalis}>
            <p>Additional information</p>
            <ul className={css.list}>
               <li>
                  <NavLink to="cast">MovieCast</NavLink>
               </li>
               <li>
                  <NavLink to="reviews">Movireviews</NavLink>
               </li>
            </ul>
         </div>
      </div>
   );
};
