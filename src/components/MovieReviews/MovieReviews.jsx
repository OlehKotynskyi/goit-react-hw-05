import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api';

export const MovieReviews = () => {
   const { movieId } = useParams();
   const [detailReviews, setDetailReviews] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      async function fetchDataReviews() {
         try {
            setLoading(true);
            setError(false);
            const fetchedDetails = await getReviews(movieId);
            setDetailReviews(fetchedDetails);
         } catch (error) {
            setError(true);
         } finally {
            setLoading(false);
         }
      }
      fetchDataReviews();
   }, [movieId]);

   return (
      <div>
         {loading && <p>Loading reviews...</p>}
         {error && <p>OOOOPS! ERROR!</p>}
         {!loading && (
            <div>
               {detailReviews.length > 0 ? (
                  <div>
                     <h2>Reviews</h2>
                     {detailReviews.map((review, index) => (
                        <div key={index}>
                           <p>Author: {review.author}</p>
                           <p>Content: {review.content}</p>
                        </div>
                     ))}
                  </div>
               ) : (
                  <p>No reviews available.</p>
               )}
            </div>
         )}
      </div>
   );
};
