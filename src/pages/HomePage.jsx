import { useState, useEffect } from 'react';
import { PopularGallery } from '../components/PopularGallery/PopularGallery';
import { getPopular } from '../api';

export default function HomePage() {
   const [popularBooks, setpopularBooks] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         try {
            setLoading(true);
            setError(false);
            const data = await getPopular();
            setpopularBooks(data);
            setLoading(false);
         } catch (error) {
            setError(true);
            setpopularBooks([]);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   return (
      <div>
         {loading && <p>Loading...</p>}
         {error && <p>OOOOPS! ERROR!</p>}
         {!loading && popularBooks.length === 0 && <p>No popular books found.</p>}
         {!loading && popularBooks.length > 0 && <PopularGallery popularBooks={popularBooks} />}
      </div>
   );
}
