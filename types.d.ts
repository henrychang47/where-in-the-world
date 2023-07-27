type Result = {
  pageid: string,
  title: string,
  extract: string,
  thumbnail?: {
    source: string,
    width: number,
    height: number,
  }
}

type SearchResult = {
  query?: {
    pages?: Result[],
  },
}

type Country = {
  name: {
    common: string,
    nativeName: Object,
  },
  tld: [],
  region: string,
  subregion: string,
  capital: string[],
  population: number,
  currencies: {
    [key: string]: {
      name: string
    }
  },
  flags: {
    png: string,
    svg: string,
    alt: string,
  },
  languages: {},
  borders: string[],
  cca3: string,
}