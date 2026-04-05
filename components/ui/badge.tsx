import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  // Base styles
  let badgeClass = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  // Variants
  if (variant === "default") badgeClass += " border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80";
  if (variant === "secondary") badgeClass += " border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80";
  if (variant === "destructive") badgeClass += " border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80";
  if (variant === "outline") badgeClass += " text-foreground";

  return (
    <div className={[badgeClass, className].filter(Boolean).join(" ")} {...props} />
  );
}

export { Badge };
