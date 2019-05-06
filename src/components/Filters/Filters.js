import React, { Component } from 'react';

import CountryFilter from './CountryFilter'
import QualityFilter from './QualityFilter'
// import DiseaseResistanceFilter from './DiseaseResistanceFilter'

class Filters extends Component {
  render() {
    return (
      <div>
        <CountryFilter />
        <QualityFilter />
        {/*<DiseaseResistanceFilter />*/}
      </div>
    );
  }
}

export default Filters;
