import Link from "next/link"
import Image from "next/image"
import { use } from "react"
import getCountriesData from "@/lib/getCountriesData";

type Props = {
  params: {
    country: string
  }
}

function page({ params: { country } }: Props) {
  const countriesData = use(getCountriesData());
  const countryData = countriesData.find(data => data.name.common.replaceAll(' ', '') === country);

  return (
    <div className="shadow-inner p-12 allBkClr">
      <Link href={`/`} >
        <button className="shadow-xl py-3 px-10 rounded-md font-bold hover:scale-110 transition-transform mb-12">
          ← Back
        </button>
      </Link>
      {countryData && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
          <div className="relative aspect-square">
            <Image
              src={countryData.flags.svg}
              fill={true}
              alt={countryData.flags.alt}
              loading="lazy"
              className="object-contain "
            />
          </div>
          <div className="">
            <h2>{countryData.name.common}</h2>
            <p>Native Name: {Object.values(countryData.name.nativeName)[0].common}</p>
            <p>Population: {countryData.population.toLocaleString()}</p>
            <p>Region: {countryData.region}</p>
            <p>Sub Region: {countryData.subregion}</p>
            <p>Capital: {countryData.capital}</p>
            <p>Top Level Domain: {countryData.tld}</p>
            <p>Currencies: {Object.values(countryData.currencies)[0].name}</p>
            <p>Languanges: {Object.values(countryData.languages).toString()}</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default page