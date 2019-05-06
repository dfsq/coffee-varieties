import React from 'react';
import classNames from 'classnames'

import styles from './DiseaseResistanceProperty.scss'

const titleMap = {
  leafRust: 'Cofee Leaf Rust',
  coffeeBerryDisease: 'Coffee Berry Disease',
  nematodes: 'Nematodes',
}
const subtitleMap = {
  RESISTANT: 'Resistant',
  TOLERANT: 'Tolerant',
  SUSCEPTIBLE: 'Susceptible',
}

function DiseaseResistanceProperty ({ type, value, render }) {
  const image = (
    <div className={classNames(styles.chart, styles[value.toLowerCase()])}>
      <span />
      <span />
      <span />
    </div>
  )
  return render(titleMap[type], subtitleMap[value], image)
}

export default DiseaseResistanceProperty;
