import toast from 'react-hot-toast';
import { useState } from 'react';
import { getSearch } from '../api';
import { DetalisMovies } from '../components/DetalisMovies/DetalisMovies';
import { SearchForm } from '../components/SearchForm/SearchForm';

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

   return (
      <div>
         <SearchForm handleSubmit={handleSearch} />
         {loading && <p>Loading...</p>}
         {error && <p>OOOOPS! ERROR!</p>}
         {!loading && searchResults.length > 0 && <DetalisMovies search={searchResults} />}
      </div>
   );
}
