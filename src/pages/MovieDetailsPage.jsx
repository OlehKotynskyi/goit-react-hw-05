import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getDetalis } from '../api';
import { DetailsPage } from '../components/DetailsPage/DetailsPage';
import { useRef } from 'react';
import { BackLink } from '../components/BackLink/BackLink';

export default function MovieDetailsPage() {
   const { movieId } = useParams();
   const [detailsFilm, setDetailsFilm] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const location = useLocation();
   const beckLink = useRef(location.state);

   useEffect(() => {
      localStorage.setItem('previousPage', location.pathname);
   }, [location.pathname]);

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
               <div>
                  <BackLink href={beckLink.current ?? '/payments'}>👈 Back to all payment</BackLink>
                  <DetailsPage detalis={detailsFilm} />
               </div>

               <Suspense fallback={<b>Loading page...</b>}>
                  <Outlet />
               </Suspense>
            </>
         )}
      </div>
   );
}
