import Navbar from "./Navbar"
import HeroSection from "./HeroSection"

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#e9eeea] px-4 py-4">

      {/* MAIN CONTAINER (LESS GAP) */}
      <div className="w-full bg-[#f5f7f4] rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

        <Navbar />
        <HeroSection />

      </div>

    </div>
  )
}