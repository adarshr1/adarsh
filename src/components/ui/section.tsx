import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { FadeIn } from "./fade-in"

interface SectionProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
  id?: string
  fadeInDelay?: number
  fadeInYOffset?: number
}

export function Section({
  title,
  description,
  children,
  className,
  id,
  fadeInDelay = 0,
  fadeInYOffset = 20
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn("py-16 md:py-24 lg:py-32 relative", className)}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <FadeIn delay={fadeInDelay} yOffset={fadeInYOffset}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </FadeIn>
        
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn(
      "bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors",
      "hover:shadow-lg hover:-translate-y-1 duration-300",
      className
    )}>
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

interface BulletListProps {
  items: {
    icon?: ReactNode
    title: string
    description?: string
  }[]
  className?: string
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-4">
          {item.icon && (
            <div className="flex-shrink-0 mt-1">
              <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                {item.icon}
              </div>
            </div>
          )}
          <div>
            <h4 className="font-medium">{item.title}</h4>
            {item.description && (
              <p className="text-sm text-muted-foreground mt-1">
                {item.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
