import css from './PageTitel.module.css';

export const PageTitel = ({ children }) => {
   return (
      <div className={css.titel}>
         <h1>{children}</h1>
      </div>
   );
};
