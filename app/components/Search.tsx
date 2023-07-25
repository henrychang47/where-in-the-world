'use client'
import { useGlobalContext } from "../Context/store"

export default function Search() {
  const { filterSearchTerm, setFilterSearchTerm } = useGlobalContext();

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      className="px-8 py-5 shadow-md rounded md:w-96 w-full md:mb-0 mb-5"
      value={filterSearchTerm}
      onChange={e => setFilterSearchTerm(e.target.value)}
    />
  )
}