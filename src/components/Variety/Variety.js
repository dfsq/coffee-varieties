import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { BeanIcon } from 'src/assets/icons'
import { getSelectedVariety } from 'src/store/selectors'
import BeanLoader from 'src/components/BeanLoader'

import Property from './Property'
import styles from './Variety.scss'

class Variety extends Component {
  render () {
    return (
      <div className={styles.root}>
        <Link to="/" className={styles.close} title="Back to overview" />
        {this.renderLoading()}
        {this.renderInfo()}
      </div>
    )
  }

  renderLoading () {
    if (this.props.selectedVariety) {
      return null
    }

    return (
      <BeanLoader message="Your coffee is brewing..." />
    )
  }

  renderInfo () {
    if (!this.props.selectedVariety) {
      return null
    }

    const {
      name,
      description,
    } = this.props.selectedVariety

    return (
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        {this.renderProperties()}
        {this.renderDiseaseResistance()}
      </div>
    )
  }

  renderProperties () {
    const { selectedVariety } = this.props

    return (
      <div className={styles.propertiesRow}>
        <h2>Properties</h2>

        <div className={styles.propertiesContainer}>
          <div className={styles.propertyBlock}>
            <Property type="beanSize" value={selectedVariety.bean_size} />
          </div>
          <div className={styles.propertyBlock}>
            <Property type="qualityPotential" value={selectedVariety.quality_potential} />
          </div>
          <div className={styles.propertyBlock}>
            <Property type="yieldPotential" value={selectedVariety.yield} />
          </div>
        </div>
      </div>
    )
  }

  renderDiseaseResistance () {
    const { selectedVariety: { disease_resistance: diseaseResistance } } = this.props

    return (
      <div className={styles.propertiesRow}>
        <h2>Disease Resistance</h2>

        <div className={styles.propertiesContainer}>
          <div className={styles.propertyBlock}>
            <Property type="leafRust" value={diseaseResistance[0].leaf_rust} />
          </div>
          <div className={styles.propertyBlock}>
            <Property type="coffeeBerryDisease" value={diseaseResistance[1].coffee_berry_disease} />
          </div>
          <div className={styles.propertyBlock}>
            <Property type="nematodes" value={diseaseResistance[2].nematodes} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, { match: { params: { variety } } }) {
  return {
    selectedVariety: getSelectedVariety(state, variety)
  }
}

const factory = connect(mapStateToProps)

export default factory(Variety)
