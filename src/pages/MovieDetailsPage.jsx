import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getDetalis } from '../api';
import { DetailsPage } from '../components/DetailsPage/DetailsPage';

export default function MovieDetailsPage() {
   const { movieId } = useParams();
   const [detailsFilm, setDetailsFilm] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      async function fetchData() {
         try {
            setLoading(true);
            setError(false);
            const fetchedDetails = await getDetalis(movieId);
            setDetailsFilm(fetchedDetails);
         } catch (error) {
            setError(true);
         } finally {
            setLoading(false);
         }
      }
      fetchData();
   }, [movieId]);

   return (
      <div>
         {loading && <p>Loading...</p>}
         {error && <p>OOOOPS! ERROR!</p>}
         {!loading && detailsFilm && (
            <>
               <DetailsPage detalis={detailsFilm} />
               <div>
                  <Outlet />
               </div>
            </>
         )}
      </div>
   );
}
