import { NavLink } from 'react-router-dom';
import css from './Nawigation.module.css';
import clsx from 'clsx';

export const Nawigation = () => {
   const buildLinkClass = ({ isActive }) => {
      return clsx(css.link, isActive && css.active);
   };
   return (
      <nav className={css.nav}>
         <ul className={css.list}>
            <li>
               <NavLink to="/" className={buildLinkClass}>
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink to="/movies" className={buildLinkClass}>
                  Movies
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};
