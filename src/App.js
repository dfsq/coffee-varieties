import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Layout from 'src/components/Layout'

import store from './store'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.CV_BASE_PATH}>
        <Layout />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
