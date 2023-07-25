import Link from "next/link"

function page() {
  return (
    <div className="shadow-inner backgroundClr p-10">
      <Link href={`/`} >
        <button className="shadow-xl py-3 px-10 rounded-md font-bold hover:scale-110 transition-transform">
          ← Back
        </button>
      </Link>
    </div>
  )
}
export default page