function filterByCountries (selectedCountries) {
  return function (item) {
    if (selectedCountries.length === 0) {
      return item
    }

    return item.producing_countries.some((country) => selectedCountries.indexOf(country) > -1)
  }
}

function filterByBeanSize (selectedSizes) {
  return function (item) {
    if (selectedSizes.length === 0) {
      return item
    }

    return selectedSizes.includes(item.bean_size)
  }
}

export function getSelectedVariety (state, name) {
  if (!state.varieties.entries) {
    return null
  }

  return state.varieties.entries.find((v) => v.name === name)
}

// TODO: should be broken into sub filters
export function getSelectedVarieties (state) {
  const {
    varieties,
    filters: { selected }
  } = state

  console.log('=== selectors::getSelectedVarieties', selected)

  if (!varieties.entries) {
    return varieties
  }

  return {
    ...varieties,
    entries: varieties.entries
      .filter(filterByBeanSize(selected.beanSize))
      .filter(filterByCountries(selected.countries))
      // .filter(filterByDiseaseResistance(selected.))
  }
}
