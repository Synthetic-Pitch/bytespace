type NameTagProps = {
  name: string
  accent: string
  className?: string
}

const NameTag = ({ name, accent, className = "" }: NameTagProps) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className="h-5 w-1.5 rounded-sm" style={{ background: accent }} />
      <span
        className="rounded-sm px-2 py-0.5 text-[11px] font-semibold text-white shadow-sm"
        style={{ background: accent }}
      >
        {name}
      </span>
    </div>
  )
}

export default NameTag
