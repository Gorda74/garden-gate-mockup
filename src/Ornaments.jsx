export function LeafSprig({ className = '' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 38V6" />
      <path d="M20 30c-5-1-8-5-9-10" />
      <path d="M20 22c5-1 8-5 9-10" />
      <path d="M20 14c-4-1-6-4-7-8" />
      <circle cx="20" cy="5" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LeafDivider({ className = '' }) {
  return (
    <div className={`leaf-divider ${className}`} aria-hidden="true">
      <span className="leaf-divider__line" />
      <LeafSprig className="leaf-divider__icon" />
      <span className="leaf-divider__line" />
    </div>
  )
}
