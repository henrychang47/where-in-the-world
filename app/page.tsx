import Search from "./components/Search"
import Filter from "./components/Filter"
import Items from "./components/Items";
import { use } from "react";
import getCountriesData from "@/lib/getCountriesData";


export default function Home() {
  const countries = use(getCountriesData());

  return (
    <main className="md:px-20 md:py-10 px-5 py-8 backgroundClr shadow-inner">
      <Search />
      <Filter />
      <Items countries={countries} />
    </main>
  )
}
