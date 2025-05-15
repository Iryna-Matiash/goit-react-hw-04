// import ScaleLoader from "react-spinners/ScaleLoader";
// import css from './Loader.module.css'



// export default function Loader() {
//     return <ScaleLoader className={css.loader } />;
// }


import React from 'react';
import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader size={50} color="#123abc" />
    </div>
  );
};

export default Loader;
