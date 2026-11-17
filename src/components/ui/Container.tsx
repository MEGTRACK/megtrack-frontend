import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-7 max-[600px]:px-[18px]", className)}>
      {children}
    </div>
  );
}