import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    // Base styles
    let btnClass = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

    // Variants
    if (variant === "default") btnClass += " bg-primary text-primary-foreground shadow hover:bg-primary/90";
    if (variant === "destructive") btnClass += " bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90";
    if (variant === "outline") btnClass += " border border-border bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground";
    if (variant === "secondary") btnClass += " bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80";
    if (variant === "ghost") btnClass += " hover:bg-accent hover:text-accent-foreground";
    if (variant === "link") btnClass += " text-primary underline-offset-4 hover:underline";

    // Sizes
    if (size === "default") btnClass += " h-9 px-4 py-2";
    if (size === "sm") btnClass += " h-8 rounded-md px-3 text-xs";
    if (size === "lg") btnClass += " h-10 rounded-md px-8";
    if (size === "icon") btnClass += " h-9 w-9";

    return (
      <button
        ref={ref}
        className={[btnClass, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
