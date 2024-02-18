import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearch } from '../api';
import { DetalisMovies } from '../components/DetalisMovies/DetalisMovies';
import { SearchForm } from '../components/SearchForm/SearchForm';

export default function MoviesPage() {
   const [searchResults, setSearchResults] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [searchParams, setSearchParams] = useSearchParams();
   const location = useLocation();

   useEffect(() => {
      const searchQuery = searchParams.get('query') || '';
      if (searchQuery) {
         handleSearch(searchQuery);
      } else {
         setSearchResults([]);
      }
   }, [searchParams]);

   useEffect(() => {
      if (location.state?.fromDetails) {
         const previousSearchResults = location.state.searchResults;
         if (previousSearchResults) {
            setSearchResults(previousSearchResults);
         }
      }
   }, [location]);

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

   const onSubmit = async query => {
      setSearchParams({ query });
      await handleSearch(query);
   };

   return (
      <div>
         <SearchForm onSubmit={onSubmit} />
         {loading && <p>Loading...</p>}
         {error && <p>OOOOPS! ERROR!</p>}
         {searchResults.length > 0 && <DetalisMovies search={searchResults} />}
      </div>
   );
}
