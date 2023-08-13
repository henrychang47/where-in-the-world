import Link from "next/link"
import Image from "next/image"
import { use } from "react"
import { Metadata } from "next";
import getCountriesData from "@/lib/getCountriesData";
import CountryLink from "./components/CountryLink";
import style from './style.module.css'

type Props = {
  params: {
    country: string
  }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  return {
    title: params.country,
  }
}


export default function page({ params: { country } }: Props) {
  const countriesData = use(getCountriesData());
  const countryData = countriesData.find(data => data.name.common.replaceAll(' ', '') === country);

  return (
    <div className={style.page + ' allBgClr'}>
      <Link href={`/`} >
        <button className="shadow-xl py-3 px-10 rounded-md font-bold hover:scale-110 transition-transform mb-12">
          ← Back
        </button>
      </Link>
      {countryData && (
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-20 sm:gap-10 max-w-screen-xl mx-auto">
          <div className="relative aspect-square">
            <Image
              src={countryData.flags.svg}
              fill={true}
              alt={countryData.flags.alt}
              loading="lazy"
              className="object-contain shadow-xl"
            />
          </div>
          <div className="flex flex-col justify-center lg:gap-10 gap-5">
            <h2 className="font-bold text-4xl">{countryData.name.common}</h2>
            <div className="grid lg:grid-cols-2 lg:gap-4 gap-2 lg:text-xl">
              <p>Native Name: {Object.values(countryData.name.nativeName)[0].common}</p>
              <p>Population: {countryData.population.toLocaleString()}</p>
              <p>Region: {countryData.region}</p>
              <p>Sub Region: {countryData.subregion}</p>
              <p>Capital: {countryData.capital}</p>
              <p>Top Level Domain: {countryData.tld}</p>
              <p>Currencies: {Object.values(countryData.currencies)[0].name}</p>
              <p>Languanges: {Object.values(countryData.languages).toString()}</p>
            </div>
            <div className="lg:text-xl">
              Border Countries: <CountryLink borders={countryData.borders} />
            </div>
          </div>
        </div>
      )}
      {!countryData && (
        <div className="text-4xl">No Target Country!</div>
      )}
    </div>
  )
}