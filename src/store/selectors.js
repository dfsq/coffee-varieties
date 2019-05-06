function filterByCountries (selectedCountries) {
  return function (item) {
    if (selectedCountries.length === 0) {
      return item
    }

    return item.producing_countries.some((country) => selectedCountries.indexOf(country) > -1)
  }
}

function filterBy (selectedParameter, getter) {
  return function (item) {
    if (selectedParameter.length === 0) {
      return item
    }

    const value = typeof getter === 'function' ? getter(item) : item[getter]

    return selectedParameter.includes(value)
  }
}

export function getSelectedVariety (state, name) {
  if (!state.varieties.entries) {
    return null
  }

  return state.varieties.entries.find((v) => v.name === name)
}

export function getSelectedVarieties (state) {
  const {
    varieties,
    filters: { selected }
  } = state

  if (!varieties.entries) {
    return varieties
  }

  return {
    ...varieties,
    entries: varieties.entries
      .filter(filterBy(selected.beanSize, 'bean_size'))
      .filter(filterBy(selected.qualityPotential, 'quality_potential'))
      .filter(filterBy(selected.yieldPotential, 'yield'))
      .filter(filterBy(selected.leafRust, (item) => item.disease_resistance[0].leaf_rust))
      .filter(filterBy(selected.coffeeBerry, (item) => item.disease_resistance[1].coffee_berry_disease))
      .filter(filterBy(selected.nematodes, (item) => item.disease_resistance[2].nematodes))
      .filter(filterByCountries(selected.countries))
  }
}
