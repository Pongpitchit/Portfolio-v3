"use client"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  gradient: string
  size?: "small" | "medium" | "large"
}

export default function ProjectCard({ title, description, category, gradient, size = "small" }: ProjectCardProps) {
  return (
    <div
      className={`group h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden relative`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="relative h-full flex flex-col justify-between">
        <div>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
            {category}
          </span>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
