import { Link } from 'react-router-dom';
export const Nawigation = () => {
   return (
      <nav>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/movies">Movies</Link>
            </li>
         </ul>
      </nav>
   );
};
