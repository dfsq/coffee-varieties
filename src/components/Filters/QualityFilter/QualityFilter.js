import React, { Component } from 'react';
import { connect } from 'react-redux'

import { withFilterable } from '../withFilterable'
import styles from '../Filters.scss'
import { filterChange } from 'src/store/filters'
import { compose } from 'redux'

const SIZES = [
  { value: 'BELOW_AVERAGE', label: 'Below Average' },
  { value: 'AVERAGE', label: 'Average' },
  { value: 'LARGE', label: 'Large' },
  { value: 'VERY_LARGE', label: 'Very Large' },
]

class QualityFilter extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h2>Quality</h2>

        <div className={styles.filterGroup}>
          {this.renderBeanSizeFilter()}
        </div>
      </div>
    )
  }

  renderBeanSizeFilter () {
    return (
      <div className={styles.filter} onChange={this.props.handleChange}>
        <h4 className={styles.filterTitle}>Bean size</h4>

        {SIZES.map(({ value, label }) => (
          <label
            key={value}
            className={styles.checkLabel}
          >
            <input type="checkbox" className={styles.check} value={value} />
            <span>{label}</span>
          </label>
        ))}
      </div>
    )
  }
}

const factory = connect(null, {
  filterChange,
})

export default compose(
  factory,
  withFilterable('beanSize')
)(QualityFilter)
