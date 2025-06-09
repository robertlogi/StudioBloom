"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Instagram, Facebook } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="z-10 flex items-center">
          <Image src="/studio-bloom-logo.png" alt="Studio Bloom Logo" width={64} height={64} />
        </Link>

        {/* Desktop navigation centered */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-8 text-[#2c3e2d]">
          <NavLink href="/myndasafn" label="Myndasafn" />
          <NavLink href="/thjonusta" label="Þjónustur" />
          <NavLink href="/um-okkur" label="Um okkur" />
          <NavLink href="/hafa-samband" label="Hafa samband" />
        </nav>

        {/* Social icons on the right */}
        <div className="hidden md:flex items-center space-x-4 z-10">
          <a href="https://www.instagram.com/studiobloom.is/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-[#2c3e2d] hover:text-[#948774] transition-colors" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61574531437395" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-[#2c3e2d] hover:text-[#948774] transition-colors" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Loka valmynd" : "Opna valmynd"}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-[#2c3e2d]" /> : <Menu className="h-6 w-6 text-[#2c3e2d]" />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-0 flex items-center justify-center">
            <nav className="flex flex-col space-y-6 text-center">
              <MobileNavLink href="/myndasafn" label="Myndasafn" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/thjonusta" label="Þjónustur" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/um-okkur" label="Um okkur" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/hafa-samband" label="Hafa samband" onClick={() => setIsMenuOpen(false)} />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="font-medium hover:opacity-80 transition-opacity text-[#2c3e2d]">
      {label}
    </Link>
  )
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="text-[#2c3e2d] text-2xl font-medium hover:opacity-80 transition-opacity"
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

