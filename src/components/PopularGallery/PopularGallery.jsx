import { Link } from 'react-router-dom';
export const PopularGallery = ({ popularBooks }) => {
   return (
      <ul>
         {popularBooks.map(item => (
            <li key={item.id}>
               <h2>{item.title}</h2>
               <Link to={`/movies/${item.id}`}>
                  <img src={item.poster_url} alt={item.title} />
               </Link>
               <p>{item.release_date}</p>
            </li>
         ))}
      </ul>
   );
};
