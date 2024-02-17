import { useEffect, useState } from 'react';
import { getCredits } from '../../api';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';

export const MovieCast = () => {
   const { movieId } = useParams();
   const [credits, setCredits] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchCredits = async () => {
         try {
            setLoading(true);
            setError(false);
            const fechActorData = await getCredits(movieId);
            setCredits(fechActorData);
         } catch (error) {
            setError(true);
         } finally {
            setLoading(false);
         }
      };

      fetchCredits();
   }, [movieId]);

   return (
      <div className={css.wrap}>
         {loading && <p>Loading...</p>}
         {error && <p>OOOOPS! ERROR!</p>}
         {!loading && (
            <div className={css.container}>
               <h2>Movie Cast</h2>
               <ul className={css.list}>
                  {credits.map(
                     item =>
                        item.profile_path && (
                           <li key={item.cast_id} className={css.item}>
                              <h2>{item.name}</h2>
                              <img src={item.poster_url} alt={item.title} width={150} />
                              <p>{item.character}</p>
                           </li>
                        )
                  )}
               </ul>
            </div>
         )}
      </div>
   );
};
