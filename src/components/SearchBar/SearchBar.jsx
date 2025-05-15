// import css from "./SearchBar.module.css";
// import { Formik, Field, Form } from "formik";
// import toast, { Toaster } from "react-hot-toast";

// export default function SearchBar({ onSearch }) {
//   return (
//     <header>
//       <Formik
//         initialValues={{
//           info: "",
//         }}
//         onSubmit={(values, actions) => {
//           if (!values.info.trim()) {
//             toast.error("please full fill some searching info");
//             return;
//           }
//           onSearch(values.info);
//           actions.resetForm();
//         }}
//       >
//         <Form className={css.searchForm}>
//           <Field
//             className={css.searchİnput}
//             type="text"
//             name="info"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//           <button className={css.searchBnt} type="submit">
//             Search
//           </button>
//           <Toaster
//             position="top-center"
//             reverseOrder={false}
//             toastOptions={{
//               style: {
//                 background: "blue",
//                 color: "yellow",
//               },
//             }}
//           />
//         </Form>
//       </Formik>
//     </header>
//   );
// }







// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import styles from './SearchBar.module.css';

// const SearchBar = ({ onSubmit }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim() === '') {
//       toast.error('Please enter a search term.');
//       return;
//     }
//     onSubmit(query);
//     setQuery('');
//   };

//   return (
//     <header className={styles.header}>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>
//           Search
//         </button>
//       </form>
//     </header>
//   );
// };

// export default SearchBar;

// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import styles from './SearchBar.module.css';
// import { FiSearch } from 'react-icons/fi';

// const SearchBar = ({ onSubmit }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim() === '') {
//       toast.error('Please enter a search term.');
//       return;
//     }
//     onSubmit(query);
//   };

//   return (
//     <header className={styles.header}>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.inputWrapper}>
//           <FiSearch className={styles.icon} />
//           <input
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className={styles.input}
//           />
//         </div>
//       </form>
//     </header>
//   );
// };

// export default SearchBar;


import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term.');
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <button type="submit" className={styles.iconButton} aria-label="Search">
            <FiSearch className={styles.icon} />
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.input}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
