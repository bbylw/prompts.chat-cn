type Props = { className?: string };

/** The mark: a caret and three lines of prompt text on a black tile. */
export function Logo({ className = 'h-6 w-6' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" fill="#0A0A0A" />
      <rect x="7" y="7" width="4" height="18" fill="#D2400F" />
      <rect x="14" y="7.5" width="11" height="3.4" fill="#E3E1DC" />
      <rect x="14" y="14.3" width="11" height="3.4" fill="#E3E1DC" />
      <rect x="14" y="21.1" width="6.6" height="3.4" fill="#E3E1DC" />
    </svg>
  );
}
