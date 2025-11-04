"use client"

import { Moon, Sun } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  isDark: boolean
  toggleDarkMode: () => void
  mounted: boolean
}

export default function Header({ isDark, toggleDarkMode, mounted }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <Image src="/iconweb.png" alt="PS Logo" width={32} height={32} className="object-contain" />
            </div>
            <span className="font-semibold text-lg hidden sm:inline">Pongpitchit.ps</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-sm hover:text-primary transition-colors">
              Home
            </a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Dark mode toggle */}
          {mounted && (
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
