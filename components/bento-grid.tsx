"use client"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function BentoGrid() {
  const projects = [
    {
      id: 1,
      title: "Docker Qr",
      description:
        "A modern restaurant ordering system where customers can order directly via QR code at their table. Built with Next.js 13+, Bun backend, PostgreSQL, Redis, and MinIO.",
      category: "Website, Docker, Mobile App",
      size: "large",
      link: "https://github.com/Pongpitchit/Qrcode-Order-Docker",
      gradient: "from-blue-500 to-blue-600",
      image: "/restaurant-qr-code-ordering.png",
    },
    {
      id: 2,
      title: "Fall Detection",
      description: "Computer vision application using OpenCV and LineBot API for fall detection",
      category: "AI/Detection",
      size: "medium",
      link: "https://github.com/Pongpitchit/Opencv-linebot-API",
      gradient: "from-purple-500 to-purple-600",
      image: "/computer-vision-fall-detection.png",
    },
    {
      id: 3,
      title: "Docker Website CRUD and Database",
      description:
        "A full-stack application built with Next.js frontend, Express.js API, and MySQL database, all containerized with Docker Compose.",
      category: "Website",
      size: "small",
      link: "https://github.com/Pongpitchit/Fullstack-Docker",
      gradient: "from-pink-500 to-pink-600",
      image: "/fullstack-docker.png",
    },
    {
      id: 4,
      title: "Guinea Pig Care",
      description: "WordPress website dedicated to guinea pig care and pet management tips",
      category: "WordPress",
      size: "small",
      link: "#",
      gradient: "from-amber-500 to-amber-600",
      image: "/guinea-pig.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Recent Projects</h2>
          <p className="text-lg text-muted-foreground">A small selection of my recent work and creative projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                ${
                  project.size === "large"
                    ? "lg:col-span-2 lg:row-span-1"
                    : project.size === "medium"
                      ? "md:col-span-1 md:row-span-2 lg:col-span-1"
                      : "col-span-1"
                }
                group
              `}
            >
              <a
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : "_self"}
                rel={project.link.startsWith("http") ? "noopener noreferrer" : ""}
                className="h-full block relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full w-fit">
                    {project.category}
                  </span>

                  <div className="relative">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-2 text-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
