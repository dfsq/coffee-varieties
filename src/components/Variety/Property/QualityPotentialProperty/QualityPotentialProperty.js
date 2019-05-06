import React from 'react';
import classNames from 'classnames'

import { CupIcon } from 'src/assets/icons'

import styles from './QualityPotentialProperty.scss'

const qualityMap = {
  GOOD: 1,
  VERY_GOOD: 3,
  EXCEPTIONAL: 5,
}

const titleMap = {
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  EXCEPTIONAL: 'Exceptional',
}

function QualityPotentialProperty ({ value, render }) {
  const image = [1, 2, 3, 4, 5].map((quality) => (
    <CupIcon
      key={quality}
      className={classNames(
        styles.quality,
        styles[value.toLowerCase()],
        qualityMap[value] === quality && styles.selected,
      )}
    />
  ))

  return render('Quality potential', titleMap[value], image)
}

export default QualityPotentialProperty;
