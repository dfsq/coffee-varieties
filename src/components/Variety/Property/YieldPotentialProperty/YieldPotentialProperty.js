import React from 'react';
import classNames from 'classnames'

import { BagIcon } from 'src/assets/icons'

import styles from './YieldPotentialProperty.scss'

const yieldPotential = [
  'LOW',
  'GOOD',
  'MEDIUM',
  'HIGH',
  'VERY_HIGH',
]
const titleMap = {
  LOW: 'Low',
  GOOD: 'Good',
  MEDIUM: 'Medium',
  HIGH: 'High',
  VERY_HIGH: 'Very high',
}

function YieldPotentialProperty ({ value, render }) {
  const image = yieldPotential.map((potential, index) => (
    <BagIcon
      key={index}
      className={classNames(
        styles.bag,
        potential === value && styles.selected,
      )}
    />
  ))

  return render('Yield potential', titleMap[value], image)
}

export default YieldPotentialProperty;
