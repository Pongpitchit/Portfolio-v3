"use client"

import { Github, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/Pongpitchit", label: "GitHub" },
    { icon: Mail, href: "mailto:contact@pongpitchit.dev", label: "Email" },
    { icon: ExternalLink, href: "#", label: "#" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">PS</span>
              </div>
              <span className="font-semibold text-lg">Pongpitchit</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">Web Developer & UI/UX Designer from Thailand</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:opacity-80 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:opacity-80 transition-opacity">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:opacity-80 transition-opacity">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-80 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            © {currentYear} Pongpitchit Sittipakdee. All rights reserved. Built with Next.js, React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
