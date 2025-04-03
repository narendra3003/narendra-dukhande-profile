interface SectionHeadingProps {
  id: string
  title: string
  description?: string
}

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div id={id} className="pt-16 -mt-16 mb-8">
      <h2 className="text-2xl font-bold tracking-tight mb-2">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
      <div className="h-1 w-20 bg-primary/50 mt-4 rounded-full"></div>
    </div>
  )
}

