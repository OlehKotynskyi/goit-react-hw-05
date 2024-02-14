import toast from 'react-hot-toast';
import { useState } from 'react';
import { getSearch } from '../api';
import { DetalisMovies } from '../components/DetalisMovies/DetalisMovies';

export default function MoviesPage() {
   const [searchResults, setSearchResults] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   const handleSearch = async query => {
      try {
         setLoading(true);
         setError(false);
         const data = await getSearch(query);
         setSearchResults(data);
         if (data.length === 0) {
            toast.error('No movies found! 😞');
         }
      } catch (error) {
         setError(true);
      } finally {
         setLoading(false);
      }
   };

   const handleSubmit = e => {
      e.preventDefault();

      const query = e.target.elements.query.value.trim();

      if (!query) {
         toast.error('Enter your search query 👈');
         return;
      }

      handleSearch(query);
      e.target.reset();
   };

   return (
      <form onSubmit={handleSubmit}>
         <input type="text" name="query" placeholder="Search images and photos" />
         <button type="submit">Search</button>

         {loading && <p>Loading...</p>}
         {error && <p>OOOOPS! ERROR!</p>}

         {!loading && searchResults.length > 0 && (
            <>
               <DetalisMovies search={searchResults} />
            </>
         )}
      </form>
   );
}
