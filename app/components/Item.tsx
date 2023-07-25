import Image from "next/image"

type Props = {
  country: Country
}

export default function Item({ country }: Props) {
  return (
    <div className="rounded-md truncate grid grid-rows-2 ">
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
        <p><span className="font-semibold">Population:</span>{country.population}</p>
        <p><span className="font-semibold">Region:</span>{country.region}</p>
        <p><span className="font-semibold">Capital:</span>{country.capital}</p>
      </div>
    </div>
  )
}