// import Modal from "react-modal";

// Modal.setAppElement("#root");

// const modalStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     overflow: "hidden",
//     backgroundColor: "black",
//     padding: "15px",
//     borderRadius: "10px",
//   },
// };

// export default function ImageModal({ isOpen, onClose, image }) {
//   return (
//     <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
//       <button onClick={onClose} style={{ float: "right" }}>
//         Close
//       </button>
//       {image && (
//         <img
//           src={image.urls.regular}
//           alt={image.description}
//           style={{ width: "100%" }}
//         />
//       )}
//     </Modal>
//   );
// }




import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
      <p className={styles.author}>Photo by {image.user.name}</p>
    </Modal>
  );
};

export default ImageModal;
