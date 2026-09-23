import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "gold" | "danger" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-ocean text-white hover:bg-ocean-hover border-transparent",
  secondary: "bg-white text-navy border-border hover:border-ocean",
  gold: "bg-gold text-[#241C08] border-transparent hover:brightness-95",
  danger: "bg-white text-danger border-danger hover:bg-danger-bg",
  ghost: "bg-transparent text-ocean border-transparent hover:bg-ocean-light",
};

export default function Button({
  variant = "primary",
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-sm text-[15px] font-semibold border-[1.5px] transition-colors",
        variantClasses[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
