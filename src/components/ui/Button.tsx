import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "red" | "dark" | "line" | "light" | "ghost";
type Size = "sm" | "md";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  red: "bg-[var(--red)] text-white shadow-[0_10px_24px_-12px_rgba(209,41,59,.9)] hover:bg-[var(--red-deep)]",
  dark: "bg-[var(--jet)] text-white hover:bg-black",
  line: "bg-transparent text-[var(--jet)] shadow-[inset_0_0_0_1.5px_var(--jet)] hover:bg-[var(--jet)] hover:text-white",
  light: "bg-white text-[var(--jet)] hover:bg-[var(--mist)]",
  ghost: "bg-white/10 text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.55)] hover:bg-white hover:text-[var(--jet)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-[18px] py-[10px] text-[0.9rem]",
  md: "px-[26px] py-[14px] text-[0.98rem]",
};

const base =
  "inline-flex items-center justify-center gap-[10px] rounded-full font-bold no-underline cursor-pointer transition-[transform,background,box-shadow] duration-150 whitespace-nowrap hover:-translate-y-px";

export function ButtonLink({
  href,
  variant = "red",
  size = "md",
  className,
  children,
}: BaseProps & { href: string }) {
  return (
    <Link href={href} className={cn(base, variantClasses[variant], sizeClasses[size], className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "red",
  size = "md",
  className,
  children,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}