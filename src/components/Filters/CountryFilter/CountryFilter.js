import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { filterChange } from 'src/store/filters/actions'

import { withFilterable } from '../withFilterable'

import styles from './CountryFilter.scss'

class CountryFilter extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h2>Producing Countries</h2>
        {this.renderList()}
      </div>
    );
  }

  renderList () {
    const { countries }  = this.props

    if (countries.length === 0) {
      return null
    }

    return (
      <ul className={styles.list} onChange={this.props.handleChange}>
        {countries.map((country) => (
          <li
            className={styles.listItem}
            key={country}
          >
            <label className={styles.label}>
              <input
                type="checkbox"
                className={styles.check}
                value={country}
              />
              {country}
            </label>
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps ({ filters: { countries } }) {
  return {
    countries,
  }
}

const factory = connect(mapStateToProps, {
  filterChange,
})

export default compose(
  factory,
  withFilterable('countries')
)(CountryFilter)
