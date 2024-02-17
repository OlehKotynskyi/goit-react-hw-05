import { NavLink } from 'react-router-dom';
import css from './BackLink.module.css';

export const BackLink = ({ href, children }) => {
   return (
      <div className={css.btnLink}>
         <NavLink to={href}>{children}</NavLink>
      </div>
   );
};
