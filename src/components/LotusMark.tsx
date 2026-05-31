interface LotusMarkProps {
  className?: string;
}

export function LotusMark({ className }: LotusMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M32 50c-12 0-22-6-22-6s4-12 16-14" />
        <path d="M32 50c12 0 22-6 22-6s-4-12-16-14" />
        <path d="M32 50c-8-4-12-14-12-22 0-6 4-10 12-14 8 4 12 8 12 14 0 8-4 18-12 22Z" />
        <path d="M32 14v36" opacity="0.5" />
        <path d="M22 30c4 4 6 10 10 20" opacity="0.4" />
        <path d="M42 30c-4 4-6 10-10 20" opacity="0.4" />
      </g>
    </svg>
  );
}
