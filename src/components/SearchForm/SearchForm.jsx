import toast from 'react-hot-toast';
import { useState } from 'react';
import css from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
   const [query, setQuery] = useState('');

   const handleSubmit = async e => {
      e.preventDefault();
      const trimmedQuery = query.trim();
      if (!trimmedQuery) {
         toast.error('Enter your search query 👈');
         return;
      }
      onSubmit(trimmedQuery);
      setQuery('');
   };

   const onInputChange = e => {
      setQuery(e.target.value);
   };

   return (
      <form onSubmit={handleSubmit} className={css.form}>
         <input
            type="text"
            name="query"
            placeholder="Search images and photos"
            className={css.input}
            value={query}
            onChange={onInputChange}
         />
         <button type="submit">Search</button>
      </form>
   );
};
