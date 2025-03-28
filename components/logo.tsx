interface LogoProps {
  small?: boolean
  dark?: boolean
}

export function Logo({ small = false, dark = false }: LogoProps) {
  return (
    <div className="flex flex-col items-center">
      <h1
        className={`font-cormorant ${small ? "text-2xl" : "text-4xl md:text-5xl"} text-center leading-tight font-light ${dark ? "text-[#2c3e2d]" : "text-white"}`}
      >
        <span className="block">Studio</span>
        <span className="block font-medium">Bloom</span>
      </h1>
    </div>
  )
}

