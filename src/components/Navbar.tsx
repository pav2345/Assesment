
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Solutions", caret: true },
  { label: "Features" },
  { label: "Pricing" },
  { label: "Blog", caret: true },
  { label: "Restaurants" },
  { label: "Food", caret: true },
]

const Caret = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="ml-1">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const OliveLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-7 h-7 rounded-full bg-[#9DBE62] relative">
      <div className="w-1.5 h-1.5 bg-green-700 rounded-full absolute top-2 left-2" />
      <div className="absolute -top-1 w-3 h-2 bg-green-700 rounded-full rotate-[-20deg]" />
    </div>
    <span className="text-[20px] font-semibold text-[#24351f]">
      Olive
    </span>
  </div>
)

export default function Navbar() {
  return (
    <header>
      <nav className="px-8 py-5 flex justify-between items-center">

        <OliveLogo />

        <div className="hidden md:flex gap-7 text-[14.5px] text-[#24351f]/80">
          {navLinks.map((link) => (
            <div key={link.label} className="flex items-center cursor-pointer">
              {link.label}
              {link.caret && <Caret />}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button className="text-sm text-[#24351f]/80">Sign in</button>

          <Button className="rounded-full bg-[#24351f] px-5 py-2 text-white">
            Get Olive →
          </Button>
        </div>
      </nav>
    </header>
  )
}