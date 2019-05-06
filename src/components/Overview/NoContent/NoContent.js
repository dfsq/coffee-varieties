import React from 'react';

import emptyCup from 'src/assets/images/empty-coffee-cup.jpg'

import styles from './NoContent.scss'

function NoContent ({ error }) {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={emptyCup} alt="Couldn't load data" />
      <div className={styles.message}>{error.message}</div>
    </div>
  )
}

export default NoContent;
