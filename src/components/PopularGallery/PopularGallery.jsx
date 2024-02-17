import { NavLink, useLocation } from 'react-router-dom';
import css from './PopularGallery.module.css';

export const PopularGallery = ({ popularBooks }) => {
   const location = useLocation();
   return (
      <div className={css.wrapPopular}>
         <ul className={css.popularList}>
            {popularBooks.map(item => (
               <li key={item.id} className={css.popularItem}>
                  <h2>{item.title}</h2>
                  <NavLink to={`/movies/${item.id}`} state={location} className={css.linkImg}>
                     <img src={item.poster_url} alt={item.title} />
                  </NavLink>
                  <p>{item.release_date}</p>
               </li>
            ))}
         </ul>
      </div>
   );
};
