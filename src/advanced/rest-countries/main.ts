import { type Country } from './api'
import { renderCard, renderHero, renderHomePage } from './renders'

import './style.css'

const countries: Country[] = JSON.parse(localStorage.getItem('countries') ?? '[]')

const getData = async (): Promise<Country[]> => {
  const baseUrl = 'https://restcountries.com/v3.1/all'
  const response = await fetch(baseUrl)
  const data = await response.json()
  return data as Country[]
}

const load = async (): Promise<void> => {
  if (countries.length === 0) {
    const data = await getData()
    localStorage.setItem('countries', JSON.stringify(data))
    countries.push(...data)
  }
}

const render = (): void => {
  const page = window.location.hash.substring(1)
  page.length === 0 ? renderHome() : renderDetail(page)
}

const renderHome = (): void => {
  const app = document.querySelector('#app')!
  app.innerHTML = renderHomePage()

  let region = ''

  const container = document.querySelector('#container')!
  const search = document.querySelector<HTMLInputElement>('#search')!
  const label = document.querySelector<HTMLLabelElement>('#label')!
  const list = document.querySelector<HTMLUListElement>('#filter')!

  container.innerHTML = countries.map(renderCard).join('')

  const onChanges = (ev: Event): void => {
    const target = ev.target as HTMLInputElement
    if (target?.nodeName === 'LI') {
      region = target.dataset.value!
      label.textContent = region
    }

    const filteredCountries = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(search.value.toLowerCase()) &&
        country.region.toLowerCase().includes(region.toLowerCase())
    )

    container.innerHTML = filteredCountries.map(renderCard).join('')
  }

  search.addEventListener('input', onChanges)
  list.addEventListener('click', onChanges)
}

const renderDetail = (countryName: string): void => {
  const app = document.querySelector('#app')!
  const country = countries.find((country) => country.name.common === countryName)
  app.innerHTML = renderHero(country)
}

window.addEventListener('load', () => load)
window.addEventListener('hashchange', render)

render()
