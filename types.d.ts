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
  region: string,
  capital: string[],
  population: number,
  flags: {
    png: string,
    svg: string,
    alt: string,
  }
}