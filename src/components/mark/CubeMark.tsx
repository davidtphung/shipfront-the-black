import { cn } from "@/lib/cn";

/**
 * Hard-line isometric cube.
 * Visible faces: top + left + right, meeting at a front vertical edge.
 * True 30-degree iso. No CSS 3D, shear, rotateY, or perspective.
 */
const STROKE = "#FF6A00";
const FACE = "#000000";

export function CubeMark({
  className,
  title,
  strokeWidth = 1.75,
}: {
  className?: string;
  title?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={cn("overflow-visible", className)}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <polygon points="40,14 62,27 40,40 18,27" fill={FACE} />
      <polygon points="18,27 40,40 40,66 18,53" fill={FACE} />
      <polygon points="62,27 40,40 40,66 62,53" fill={FACE} />
      <g
        fill="none"
        stroke={STROKE}
        strokeWidth={strokeWidth}
        strokeLinejoin="miter"
        strokeLinecap="square"
      >
        <polyline points="40,14 62,27 40,40 18,27 40,14" />
        <polyline points="18,27 18,53 40,66 62,53 62,27" />
        <line x1="40" y1="40" x2="40" y2="66" />
        <line x1="40" y1="40" x2="18" y2="27" />
        <line x1="40" y1="40" x2="62" y2="27" />
      </g>
    </svg>
  );
}
