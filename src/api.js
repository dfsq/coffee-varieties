const API_PATH = 'https://coffee-varieties.now.sh/api'

const requestCache = Object.create(null)

export async function makeRequest(endpoint = '') {
  if (endpoint in requestCache) {
    return Promise.resolve(requestCache[endpoint])
  }

  // To trigger network error
  // throw new Error('Error: no coffee for you today')

  const url = `${API_PATH}${endpoint}`
  const response = await fetch(url)
  const data = await response.json()

  if (response.ok === false) {
    throw new Error('Error: no coffee for you today') // data.message
  }

  requestCache[endpoint] = data

  return data
}

export function getVarieties () {
  return makeRequest()
}

export async function getCountries () {
  const varieties = await getVarieties()
  const countries = varieties.reduce((prev, curr) => {
    return prev.concat(curr.producing_countries)
  }, [])

  return [...new Set(countries)] 
}
