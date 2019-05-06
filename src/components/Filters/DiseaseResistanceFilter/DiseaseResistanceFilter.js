import React, { Component } from 'react';

import styles from '../Filters.scss'

class DiseaseResistanceFilter extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h2>Disease Resistance</h2>

        <div className={styles.filterGroup}>
          {this.renderLeafRustFilter()}
        </div>
      </div>
    )
  }

  renderLeafRustFilter () {
    return (
      <div className={styles.filter}>
        <h4 className={styles.filterTitle}>Leaf Rust</h4>
        <label className={styles.checkLabel}>
          <input type="checkbox" className={styles.check} />
          <span>Resistant</span>
        </label>
        <label className={styles.checkLabel}>
          <input type="checkbox" className={styles.check} />
          <span>Tolerant</span>
        </label>
        <label className={styles.checkLabel}>
          <input type="checkbox" className={styles.check} />
          <span>Susceptible</span>
        </label>
      </div>
    )
  }
}

export default DiseaseResistanceFilter
