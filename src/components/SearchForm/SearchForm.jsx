import toast from 'react-hot-toast';
import css from './SearchForm.module.css';

export const SearchForm = ({ handleSubmit }) => {
   const onSubmit = e => {
      e.preventDefault();
      const query = e.target.elements.query.value.trim();
      if (!query) {
         toast.error('Enter your search query 👈');
         return;
      }
      handleSubmit(query);
   };

   return (
      <form onSubmit={onSubmit}>
         <div className={css.form}>
            <input
               type="text"
               name="query"
               placeholder="Search images and photos"
               className={css.input}
            />
            <button type="submit">Search</button>
         </div>
      </form>
   );
};
