"use client"

import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  repoUrl: string
  imageUrl?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  repoUrl,
  imageUrl,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 bg-card",
        "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col",
        className
      )}
    >
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-muted rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:underline"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </Link>
          )}
          <Link
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center text-sm",
              demoUrl ? "text-muted-foreground" : "text-primary"
            )}
            aria-label={`View ${title} source code on GitHub`}
          >
            <Github className="w-4 h-4 mr-1" />
            Source Code
          </Link>
        </div>
      </div>
    </div>
  )
}
