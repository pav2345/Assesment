import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import appScreen from "@/assets/polished_image.png"

const avatars = [
  { src: "https://i.pravatar.cc/64?img=1", fallback: "A" },
  { src: "https://i.pravatar.cc/64?img=5", fallback: "B" },
  { src: "https://i.pravatar.cc/64?img=12", fallback: "C" },
  { src: "https://i.pravatar.cc/64?img=32", fallback: "D" },
]

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.365 1.43c0 1.14-.46 2.21-1.214 3-.825.864-2.169 1.523-3.265 1.43-.13-1.1.42-2.244 1.158-3.034.83-.89 2.245-1.55 3.32-1.396zM20.5 17.21c-.55 1.27-.81 1.84-1.51 2.96-.98 1.56-2.36 3.5-4.07 3.51-1.52.02-1.91-.99-3.97-.98-2.06.01-2.49 1-4.01.98-1.71-.02-3.02-1.78-4-3.34C.42 16.43-.06 11.21 1.84 8.45c1.35-1.95 3.48-3.1 5.49-3.1 2.04 0 3.32 1.12 5.01 1.12 1.64 0 2.64-1.12 5-1.12 1.79 0 3.69.97 5.04 2.66-4.43 2.43-3.71 8.78-1.88 9.2z" />
  </svg>
)

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-16 pb-16">

      {/* Trust */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex -space-x-2">
          {avatars.map((a, i) => (
            <Avatar key={i} className="w-8 h-8 border-2 border-white">
              <AvatarImage src={a.src} />
              <AvatarFallback>{a.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          Trusted by thousands of healthy families
        </p>
      </div>

      {/* Heading */}
      <h1 className="max-w-[850px] text-[48px] md:text-[72px] font-semibold leading-[1.05] tracking-tight text-[#24351f]">
        The Safest Way to <br className="hidden md:block" />
        Shop for Groceries
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-[520px] text-[15px] md:text-[17px] text-gray-500 leading-[1.6]">
        Use the Olive Food Scanner App to Instantly Eliminate Harmful
        Ingredients from Your Family’s Diet and Get Expert-Backed Food Insights
      </p>

      {/* CTA */}
      <div className="mt-8">
        <Button className="rounded-full bg-[#24351f] px-7 py-4 text-sm text-white shadow-lg hover:bg-[#1c2a18] flex items-center">
          <AppleIcon />
          <span className="ml-2">Download for iOS</span>
        </Button>
      </div>

      {/* PHONE */}
      <div className="relative mt-14 flex justify-center">

        {/* Soft Glow */}
        <div className="absolute w-[420px] h-[420px] bg-black/10 blur-3xl rounded-full"></div>

        {/* Phone Body */}
        <div className="relative w-[300px] h-[580px] bg-white rounded-[45px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

          {/* Screen */}
          <div className="w-full h-full relative">

            {/* Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-10"></div>

            {/* ✅ FULL EDGE IMAGE */}
            <img
              src={appScreen}
              alt="app"
              className="w-full h-full object-cover"
            />

          </div>
        </div>
      </div>

    </section>
  )
}