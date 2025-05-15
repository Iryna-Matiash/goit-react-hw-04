// import css from "./LoadMoreBtn.module.css";

// export default function LoadMoreBtn({ handleClick }) {
//   return (
//     <button onClick={handleClick} className={css.loadMoreBtn} type="submit">
//       Load more
//     </button>
//   );
// }


// import React from 'react';
// import styles from './LoadMoreBtn.module.css';

// const LoadMoreBtn = ({ onClick }) => {
//   return (
//     <div className={styles.container}>
//       <button onClick={onClick} className={styles.button}>
//         Load more
//       </button>
//     </div>
//   );
// };

// export default LoadMoreBtn;


import React from 'react';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.button}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
