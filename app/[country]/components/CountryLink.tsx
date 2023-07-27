import Link from "next/link"
import { use } from "react"
import getCountriesData from "@/lib/getCountriesData";

function getCountryNameByCountryCode(countryCode: string): string {
  const countriesData = use(getCountriesData());
  const country = countriesData.find(country => {
    return country.cca3 === countryCode;
  })

  return country?.name.common || countryCode;
}

export default function CountryLink({ borders }: { borders: string[] }) {
  if (!borders) return (<>None</>);

  const results = (
    <div className="inline-flex gap-3 flex-wrap">
      {
        borders.map(countryCode => {
          const countryName = getCountryNameByCountryCode(countryCode);
          return (
            <Link
              href={countryName}
              key={countryName}
              className="px-4 py-2 rounded hover:scale-110 transition-transform"
            >
              <button >
                {countryName}
              </button>
            </Link>
          )
        })
      }
    </div>
  )
  return results;
}