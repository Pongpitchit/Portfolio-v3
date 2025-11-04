"use client"

export default function HeroSection() {
  return (
    <section id="home" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Pongpitchit Sittipakdee</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-2">Web Developer & UI/UX Designer</p>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Building beautiful digital experiences with HTML, CSS, JavaScript, and modern web technologies
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/Pongpitchit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            GitHub Profile
          </a>
        </div>

        {/* Decorative element */}
      </div>
    </section>
  )
}
