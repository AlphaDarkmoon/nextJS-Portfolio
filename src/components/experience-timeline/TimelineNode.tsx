import type { TimelineExperience } from "./Timeline"

interface TimelineNodeProps {
  experience: TimelineExperience
  onClick: () => void
}

export function TimelineNode({ experience, onClick }: TimelineNodeProps) {
  const isAbove = experience.position === "above"

  return (
    <div className="relative flex h-full flex-col items-center justify-center">
      {/* Timeline dot - centered */}
      <div className="relative z-10 flex h-4 w-4 items-center justify-center">
        <div className="h-4 w-4 rounded-full border-2 border-primary bg-background transition-all hover:scale-125" />
        <div className="absolute h-2 w-2 rounded-full bg-primary" />
      </div>

      {/* Content - positioned above or below */}
      <div
        className={`absolute flex flex-col items-center ${
          isAbove 
            ? "bottom-2 flex-col-reverse" 
            : "top-2 flex-col"
        }`}
      >
        {/* Connector line */}
        <div className="w-0.5 bg-border h-12" />

        {/* Job info card */}
        <button
          onClick={onClick}
          className="group w-48 cursor-pointer rounded-lg border bg-card p-4 text-left shadow-sm transition-all hover:scale-105 hover:shadow-md"
        >
          <h3 className="mb-1 text-sm font-semibold leading-tight group-hover:text-primary">
            {experience.title}
          </h3>
          <p className="text-xs text-muted-foreground">
            {experience.company}
          </p>
          <p className="mt-2 text-xs font-medium text-primary">
            {experience.period}
          </p>
          
          {/* Year label */}
          <div className="mt-3 pt-2 border-t text-xs font-medium text-muted-foreground">
            {experience.year}
          </div>
        </button>
      </div>
    </div>
  )
}
