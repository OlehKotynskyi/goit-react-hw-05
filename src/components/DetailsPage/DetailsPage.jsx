import { Link } from 'react-router-dom';
export const DetailsPage = ({ detalis }) => {
   return (
      <div>
         <p>{detalis.genres[0].name}</p>
         <h2>
            {detalis.title} <span>({detalis.release_date})</span>
         </h2>
         <img src={detalis.poster_url} alt={detalis.title} />
         <p>{Math.floor(detalis.popularity)}%</p>
         <p>{detalis.overview}</p>
         <div>
            <Link to="cast">MovieCast</Link>
            <Link to="reviews">Movireviews</Link>
         </div>
      </div>
   );
};
