import React, { Fragment } from 'react';

import BeanSizeProperty from './BeanSizeProperty'
import QualityPotentialProperty from './QualityPotentialProperty'
import YieldPotentialProperty from './YieldPotentialProperty'
import DiseaseResistanceProperty from './DiseaseResistanceProperty'

import styles from './Property.scss'

const componentMap = {
  beanSize: BeanSizeProperty,
  qualityPotential: QualityPotentialProperty,
  yieldPotential: YieldPotentialProperty,
  leafRust: DiseaseResistanceProperty,
  coffeeBerryDisease: DiseaseResistanceProperty,
  nematodes: DiseaseResistanceProperty,
}

function Property ({ type, value }) {
  const Component = componentMap[type]

  return (
    <div>
      <Component
        type={type}
        value={value}
        render={(title, subtitle, image) => (
          <Fragment>
            <h4 className={styles.propertyTitle}>{title}</h4>
            <div>{subtitle}</div>
            {image}
          </Fragment>
        )}
      />
    </div>
  )
}

export default Property
