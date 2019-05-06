import React from 'react';
import classNames from 'classnames'

import { BeanIcon } from 'src/assets/icons'

import styles from './BeanSizeProperty.scss'

const SIZES = [
  'BELOW_AVERAGE',
  'AVERAGE',
  'LARGE',
  'VERY_LARGE',
]

const titleMap = {
  BELOW_AVERAGE: 'Below Average',
  AVERAGE: 'Average',
  LARGE: 'Large',
  VERY_LARGE: 'Very Large',
}

function BeanSizeProperty ({ value, render }) {
  const image = SIZES.map((size) => (
    <BeanIcon
      key={size}
      className={classNames(
        styles.bean,
        styles[size.toLowerCase()],
        size === value && styles.selected,
      )}
    />
  ))
  return render('Bean size', titleMap[value], image)
}

export default BeanSizeProperty
