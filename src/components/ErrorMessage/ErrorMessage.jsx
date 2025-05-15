// import css from "./ErrorMessage.module.css";

// export default function ErrorMessage() {
//   return <p className={css.error}>There was an error please reload...</p>;
// }


import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
