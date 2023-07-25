'use client'
import Image from "next/image"
import { useGlobalContext } from "../Context/store"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  countries: Country[],
}

export default function Items({ countries }: Props) {
  const { filterRegion, filterSearchTerm } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
  }, [filterRegion, filterSearchTerm]);

  const getFilteredCountries = () => {
    const filteredCountries = filterRegion === 'all' ?
      countries :
      countries.filter(country => {
        return country.region.toLowerCase() === filterRegion;
      });

    return filteredCountries.filter(country => {
      return country.name.common.toLowerCase().includes(filterSearchTerm)
        || country.capital[0].toLowerCase().includes(filterSearchTerm);
    });
  }

  return (
    <div className="backgroundClr grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20 justify-between mt-5 md:mt-10 w-full">
      {getFilteredCountries().map(country => {
        return (
          <div
            className="rounded-md truncate grid grid-rows-2 cursor-pointer"
            key={country.name.common}
            onClick={() => router.push(country.name.common)}
          >
            <div className="relative">
              <Image
                src={country.flags.svg}
                fill={true}
                alt={country.flags.alt}
                loading="lazy"
                className="object-contain"
              />
            </div>

            <div className="infos p-4 grid-rows-4 text-left">
              <h3 className="font-bold text-xl">{country.name.common}</h3>
              <p><span className="font-semibold">Population: </span>{country.population.toLocaleString()}</p>
              <p><span className="font-semibold">Region: </span>{country.region}</p>
              <p><span className="font-semibold">Capital: </span>{country.capital}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}