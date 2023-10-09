import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <>
      <div className={styles.error}>
        <img src="logo.png" alt="Pizza logo" className={styles.logo} />
        <h1 className={styles.title}>Oops, we burned this page.</h1>
        <p className={styles.message}>Sorry, we couldn't find the page you were looking for.</p>
        <div className={styles.search}>
          <input type="text" placeholder="Search for pizzas…" /> <button>Search</button>
        </div>
      </div>
    </>
  );
};

export default NotFoundBlock;
