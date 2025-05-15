// import css from "./ImageGallery.module.css";
// import ImageCard from "../ImageCard/ImageCard";

// export default function ImageGallery({ items, onImageClick }) {
//   return (
//     <ul className={css.list}>
//       {items.map((item) => (
//         <li key={item.id}>
//           <ImageCard item={item} onClick={() => onImageClick(item)} />
//         </li>
//       ))}
//     </ul>
//   );
// }


import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
