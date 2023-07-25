'use client'
import { useGlobalContext } from "../Context/store"

export default function Filter() {
  const { setFilterRegion } = useGlobalContext();

  const handlefilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRegion(e.target.value);
  }

  return (
    <select
      name="region"
      id=""
      className="px-6 py-5 rounded shadow-md md:float-right"
      onChange={handlefilter}
    >
      <option value="all">Filter by Region</option>
      <option value="all">All</option>
      <option value="africa">Arfica</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
}