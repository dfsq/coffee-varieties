import React from 'react';

import { BeanIcon } from 'src/assets/icons'

import styles from './BeanLoader.scss'

function BeanLoader ({ message }) {
  return (
    <div className={styles.loadingContainer}>
      <BeanIcon className={styles.beanLoading} />
      <div className={styles.loadingMessage}>{message}</div>
    </div>
  );
}

export default BeanLoader;
