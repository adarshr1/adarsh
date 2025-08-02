"use client"

import { FadeIn } from "@/components/ui/fade-in"
import { ProjectCard } from "@/components/ui/project-card"
import { Section } from "@/components/ui/section"

const projects = [
  {
    title: "Task Manager App",
    description: "A full-stack task management app built with React and Node.js.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    demoUrl: "https://taskmanager.example.com",
    repoUrl: "https://github.com/username/task-manager",
    imageUrl: "/images/projects/task-manager.jpg"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app using a public API with 5-day forecast.",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    demoUrl: "https://weather.example.com",
    repoUrl: "https://github.com/username/weather-app",
    imageUrl: "/images/projects/weather-dashboard.jpg"
  },
  {
    title: "Blog CMS",
    description: "Content management system for a blog with markdown support.",
    technologies: ["Next.js", "Tailwind CSS", "MDX", "TypeScript"],
    demoUrl: "https://blogcms.example.com",
    repoUrl: "https://github.com/username/blog-cms",
    imageUrl: "/images/projects/blog-cms.jpg"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with cart and payment integration.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://store.example.com",
    repoUrl: "https://github.com/username/ecommerce",
    imageUrl: "/images/projects/ecommerce.jpg"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with project showcase and blog.",
    technologies: ["Next.js", "Contentful", "Tailwind CSS"],
    demoUrl: "https://portfolio.example.com",
    repoUrl: "https://github.com/username/portfolio",
    imageUrl: "/images/projects/portfolio.jpg"
  },
  {
    title: "Recipe Finder",
    description: "Discover and save recipes with dietary filters and favorites.",
    technologies: ["React", "Spoonacular API", "Firebase"],
    demoUrl: "https://recipes.example.com",
    repoUrl: "https://github.com/username/recipe-finder",
    imageUrl: "/images/projects/recipe-finder.jpg"
  }
]

export function ProjectsSection() {
  return (
    <Section 
      title="My Projects" 
      description="A collection of my recent work and contributions."
      id="projects"
      className="bg-gradient-to-b from-background to-muted/5"
    >
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn 
              key={project.title} 
              delay={100 * (index % 3)}
              className="h-full"
            >
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  )
}
