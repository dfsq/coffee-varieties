import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'

import { filterChange } from 'src/store/filters'

import { withFilterable } from '../withFilterable'
import styles from '../Filters.scss'

const options = [
  { value: 'RESISTANT', label: 'Resistant' },
  { value: 'TOLERANT', label: 'Tolerant' },
  { value: 'SUSCEPTIBLE', label: 'Susceptible' },
]

const FILTERS = [
  {
    key: 'leafRust',
    title: 'Leaf Rust',
    options,
  },
  {
    key: 'coffeeBerry',
    title: 'Coffee Berry Disease',
    options,
  },
  {
    key: 'nematodes',
    title: 'Nematodes',
    options,
  }
]

class DiseaseResistanceFilter extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h2>Disease Resistance</h2>

        <div className={styles.filterGroup}>
          {this.renderFilters()}
        </div>
      </div>
    )
  }

  renderFilters () {
    return FILTERS.map(({ key, title, options }) => (
      <div
        key={title}
        className={styles.filter}
        onChange={this.props.handleChange}
      >
        <h4 className={styles.filterTitle}>{title}</h4>

        {options.map(({ value, label }) => (
          <label
            key={value}
            className={styles.checkLabel}
          >
            <input
              className={styles.check}
              type="checkbox"
              value={value}
              name={key}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    ))
  }
}

const factory = connect(null, {
  filterChange,
})

export default compose(
  factory,
  withFilterable,
)(DiseaseResistanceFilter)
