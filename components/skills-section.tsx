"use client"

import { Code2, Palette, FileJson, Github } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "Python", "C", "Docker", "Express.js"],
    },
    {
      icon: Palette,
      title: "Frontend & Tools",
      skills: ["Tailwind CSS", "Responsive Design", "Animations", "Web Development"],
    },
    {
      icon: FileJson,
      title: "Design & UI",
      skills: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    },
    {
      icon: Github,
      title: "Available Codes",
      skills: ["HTML", "JavaScript", "CSS", "Bootstrap", "Python", "C"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">MySkills</h2>
          <p className="text-lg text-muted-foreground">
            HTML, CSS, JS • Available Codes • Figma UI/UX Design Tool • GitHub • Python
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="p-6 border border-border rounded-xl hover:border-primary/50 hover:bg-background transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-4 text-balance">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="mt-12 p-8 border border-border rounded-xl bg-background">
          <h3 className="text-2xl font-bold mb-4">Location & Availability</h3>
          <p className="text-muted-foreground mb-4">
            Based in Thailand • Available for freelance and full-time opportunities
          </p>
          <p className="text-sm text-muted-foreground">
            This faculty is another faculty that can be used to continue working in many careers and various places of
            work, whether it be graphics work, editing, programmers, analysts, work system designers, web developers and
            many more. Easy to work with various computers.
          </p>
        </div>
      </div>
    </section>
  )
}
