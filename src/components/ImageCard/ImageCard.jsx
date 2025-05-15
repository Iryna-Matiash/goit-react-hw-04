// import css from "./ImageCard.module.css";

// export default function ImageCard({ item, onClick }) {
//   return (
//     <div>
//       <img
//         className={css.galleryİmg}
//         src={item.urls.small}
//         alt={item.description}
//         onClick={onClick}
//       />
//     </div>
//   );
// }


import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
