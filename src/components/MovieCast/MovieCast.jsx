import { useEffect, useState } from 'react';
import { getCredits } from '../../api';
import { useParams } from 'react-router-dom';

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
      <div>
         {loading && <p>Loading...</p>}
         {error && <p>OOOOPS! ERROR!</p>}
         {!loading && (
            <div>
               <h2>Movie Cast</h2>
               <ul>
                  {credits.map(item => (
                     <li key={item.cast_id}>
                        {item.profile_path && (
                           <>
                              <h2>{item.name}</h2>
                              <img src={item.poster_url} alt={item.title} width={150} />
                              <p>{item.character}</p>
                           </>
                        )}
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};
