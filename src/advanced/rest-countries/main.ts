import { type Country } from './api'
import { renderCard, renderHero, renderHomePage } from './renders'

import './style.css'

enum Theme {
  Dark = 'dark',
  Light = 'light'
}

const buttonTheme = document.querySelector<HTMLButtonElement>('#toggle')!

const toggleIcon = (theme: Theme): void => {
  buttonTheme
    .querySelector('path')!
    .setAttribute(
      'd',
      theme === Theme.Dark
        ? 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
        : 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
    )
}
const toggleTheme = (theme: Theme): void => {
  localStorage.theme = theme
  document.documentElement.classList.toggle(Theme.Dark, theme === Theme.Dark)
  toggleIcon(theme)
}

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
  const page = decodeURI(window.location.hash.substring(1))

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
      label.textContent = target.textContent
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
buttonTheme.addEventListener('click', () => {
  toggleTheme(localStorage.theme === Theme.Dark ? Theme.Light : Theme.Dark)
})

render()
toggleTheme(localStorage.theme ?? Theme.Light)
