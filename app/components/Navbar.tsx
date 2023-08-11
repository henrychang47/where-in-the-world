import Link from "next/link"

type Props = {
  toggleTheme: () => void
}

export default function Navbar({ toggleTheme }: Props) {
  return (
    <nav className="py-7 md:px-20 px-5 flex justify-between box-border h-24">
      <Link href={`/`} className="md:text-3xl text-2xl font-bold">Where in the world?</Link>
      <button className="font-semibold" onClick={toggleTheme}>Dark Mode</button>
    </nav>
  )
}