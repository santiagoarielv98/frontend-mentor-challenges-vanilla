import type { Country } from './api'

const filters = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

export const renderHomePage = (): string => `
<form class="flex justify-between gap-4 flex-wrap">
  <div class="inline-flex w-full max-w-[30rem] min-w-[15rem] relative h-max shadow-md bg-white rounded-md">
    <div class="absolute inset-y-0 left-0 flex items-center px-6 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <input
      class="w-full px-6 py-4 pl-[73px] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 hover:ring-2 hover:ring-gray-300"
      type="text"
      id="search"
      placeholder="Search for a country..."
    />
  </div>
  <label class="inline-flex w-full max-w-[12.5rem] relative h-max shadow-md bg-white rounded-md">
    <input id="menu" hidden class="peer" type="checkbox" />
    <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <label
      class="w-full px-6 py-4 text-sm rounded-md cursor-pointer peer-checked:ring-2 peer-checked:ring-gray-300 hover:ring-2 hover:ring-gray-300"
      for="menu"
      id="label"
      >Filter by Region</label
    >
    <ul id="filter" class="invisible absolute inset-x-0 top-full mt-2 py-3 peer-checked:visible shadow-md bg-white cursor-pointer">
      <li class="px-6 py-1 hover:bg-gray-100 hover:text-gray-900" data-value="">All</li>
      ${filters
        .map(
          (filter) => `
<li class="px-6 py-1 hover:bg-gray-100 hover:text-gray-900" data-value="${filter}">${filter}</li>
`
        )
        .join('')}
    </ul>
  </label>
</form>
<div id="container" class="mt-12 grid gap-[4.625rem] grid-cols-[repeat(auto-fit,_minmax(16.5rem,_1fr))]"></div>
`

export const renderCard = (country: Country): string => `
<a href="#${country.name.common}" class="mx-auto">
  <div
    class="card w-[16.5rem] flex flex-col h-[21rem] shadow-md bg-white rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
  >
    <img
      class="w-full h-40 object-cover"
      src="${country.flags.svg}"
      alt="${country.flags.alt}"
      width="264"
      height="160"
    />
    <div class="p-6 flex-1">
      <h2 class="font-bold text-lg">${country.name.common}</h2>
      <ul class="mt-3 text-sm leading-relaxed">
        <li>
          <p>
            <b class="tracking-tight">Population:</b>
            <span>${country.population}</span>
          </p>
        </li>
        <li>
          <p>
            <b class="tracking-tight">Region:</b>
            <span>${country.region}</span>
          </p>
        </li>
        <li>
          <p>
            <b class="tracking-tight">Capital:</b>
            <span>${country.capital?.join(', ')}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</a>
`
export const renderHero = (country?: Country): string => `
<a
  href="#"
  class="inline-flex w-[8.5rem] justify-center gap-2 px-4 py-2 pr-6 bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg transition-shadow focus:ring-2 focus:ring-gray-300"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
    <path
      fill-rule="evenodd"
      d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
      clip-rule="evenodd"
    />
  </svg>
  Back
</a>
${country === undefined ? '' : renderDetail(country)}
`

const renderDetail = (country: Country): string => `
<div class="mt-12 flex justify-between gap-12 flex-wrap max-lg:flex-col">
  <div class="flex-1 max-w-[35rem] mx-auto">
    <img src="${country.flags.svg}" alt="${country.flags.alt}" class="aspect-[7/5] w-full" />
  </div>
  <div class="flex-1 max-w-[37.5rem] mx-auto w-full">
    <div class="flex flex-col justify-center gap-8 h-full w-full">
      <h1 class="text-3xl text-[32px] font-bold leading-tight tracking-tight">${country.name.common}</h1>
      <div class="flex justify-between flex-wrap gap-10">
        <ul class="flex flex-col gap-2">
          <li>
            <p>
              <b class="tracking-tight">Native Name:</b>
              <span> ${Object.values(country.name.nativeName)[0].common} </span>
            </p>
          </li>
          <li>
            <p>
              <b class="tracking-tight">Population:</b>
              <span> ${country.population} </span>
            </p>
          </li>
          <li>
            <p>
              <b class="tracking-tight">Region:</b>
              <span>${country.region}</span>
            </p>
          </li>
          <li>
            <p>
              <b class="tracking-tight">Sub Region:</b>
              <span> ${country.subregion} </span>
            </p>
          </li>
          <li>
            <p>
              <b class="tracking-tight">Capital:</b>
              <span> ${country.capital?.join(', ')} </span>
            </p>
          </li>
        </ul>
        <ul class="flex flex-col gap-2">
          <li>
            <p>
              <b class="tracking-tight">Top Level Domain:</b>
              <span> ${country.tld?.join(', ')} </span>
            </p>
          </li>
          <li>
            <p>
              <b class="tracking-tight">Currencies:</b>
              <span> ${Object.values(country.currencies)
                .map((c) => c.name)
                ?.join(', ')} </span>
            </p>
          </li>
          <li>
            <p>
              <b class="tracking-tight">Languages:</b>
              <span> ${Object.values(country.languages)?.join(', ')} </span>
            </p>
          </li>
        </ul>
      </div>
      <div class="flex items-center flex-wrap gap-[9px] mt-9">
        <b class="tracking-tight mr-2">Border Countries: </b>
        ${country.borders
          ?.map(
            (b) => `<span class="w-24 px-2 py-1 text-center font-semibold text-sm border rounded-md"
          >${b}</span
        >`
          )
          .join('')}
      </div>
    </div>
  </div>
</div>
`
