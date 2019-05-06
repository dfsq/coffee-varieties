import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { getSelectedVarieties } from 'src/store/selectors'
import BeanLoader from 'src/components/BeanLoader'
import Variety from 'src/components/Variety'
import Filters from 'src/components/Filters'

import NoContent from './NoContent'
import styles from './Overview.scss'

class Overview extends Component {
  render () {
    return (
      <div className={styles.root}>
        {this.renderLoading()}
        {this.renderError()}
        {this.renderEntries()}
        {this.renderVariety()}
        {this.renderFilters()}
      </div>
    )
  }

  renderLoading () {
    const { loading } = this.props.varieties

    if (!loading) {
      return null
    }

    return (
      <BeanLoader message="Loading your coffee..." />
    )
  }

  renderError () {
    const { error } = this.props.varieties

    if (!error) {
      return null
    }

    return (
      <NoContent error={error} />
    )
  }

  renderEntries () {
    const { entries, loading, error } = this.props.varieties

    if (loading || error) {
      return null
    }

    return (
      <div>
        <h1>Varieties</h1>

        {this.renderNothing()}

        <ul className={styles.list}>
          {entries && entries.map(({ name }) => (
            <li key={name}>
              <Link to={`/variety/${name}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderNothing () {
    const { entries } = this.props.varieties

    if (entries.length > 0) {
      return null
    }

    return (
      <div>Nothing matches your filters :(</div>
    )
  }

  renderVariety () {
    return (
      <div className={styles.varietyPopup}>
        <Route
          path="/variety/:variety"
          component={Variety}
        />
      </div>
    )
  }

  renderFilters () {
    const { loading, error } = this.props.varieties

    if (error || loading) {
      return null
    }

    return (
      <Filters />
    )
  }
}

function mapStateToProps (state) {
  return {
    varieties: getSelectedVarieties(state)
  }
}

const factory = connect(mapStateToProps)

export default factory(Overview)
