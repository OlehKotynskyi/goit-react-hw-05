import { Link } from 'react-router-dom';
export const DetalisMovies = ({ search }) => {
   return (
      <ul>
         {search.map(movie => (
            <li key={movie.id}>
               <p>{movie.title}</p>
               <Link to={`/movies/${movie.id}`}>
                  <img src={movie.poster_url} alt={movie.title} />
               </Link>
               <p>{movie.release_date}</p>
            </li>
         ))}
      </ul>
   );
};
