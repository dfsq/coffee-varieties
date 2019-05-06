import React from 'react'
import { Route } from 'react-router-dom'

import Overview from 'src/components/Overview'

import styles from './Layout.scss'

function AppLayout () {
  return (
    <div className={styles.root}>
      <Route
        path="/"
        component={Overview}
      />
    </div>
  )
}

export default AppLayout
