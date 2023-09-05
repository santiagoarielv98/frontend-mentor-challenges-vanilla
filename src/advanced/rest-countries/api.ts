export interface Country {
  name: {
    common: string
    nativeName: Record<string, CountryName>
  }
  currencies: Record<string, CurrencyName>
  population: number
  region: string
  subregion: string
  capital: string[]
  flags: {
    svg: string
    alt: string
  }
  languages: Record<string, string>
  borders: string[] | null
  tld: string[]
}

export interface CountryName {
  common: string
  official: string
}

export interface CurrencyName {
  name: string
  symbol: string
}
