import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'

import { filterChange } from 'src/store/filters'

import { withFilterable } from '../withFilterable'
import styles from '../Filters.scss'

const FILTERS = [
  {
    key: 'beanSize',
    title: 'Bean size',
    options: [
      { value: 'BELOW_AVERAGE', label: 'Below Average' },
      { value: 'AVERAGE', label: 'Average' },
      { value: 'LARGE', label: 'Large' },
      { value: 'VERY_LARGE', label: 'Very Large' },
    ],
  },
  {
    key: 'qualityPotential',
    title: 'Quality potential',
    options: [
      { value: 'GOOD', label: 'Good' },
      { value: 'VERY_GOOD', label: 'Very Good' },
      { value: 'EXCEPTIONAL', label: 'Exceptional' },
    ],
  },
  {
    key: 'yieldPotential',
    title: 'Yield Potential',
    options: [
      { value: 'LOW', label: 'Low' },
      { value: 'MEDIUM', label: 'Medium' },
      { value: 'HIGH', label: 'High' },
      { value: 'VERY_HIGH', label: 'Very high' },
    ],
  }
]

class QualityFilter extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h2>Quality</h2>

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
)(QualityFilter)
