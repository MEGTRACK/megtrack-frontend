import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "light" | "mist" | "dark";

const toneClasses: Record<Tone, string> = {
  light: "",
  mist: "bg-[var(--mist)]",
  dark: "bg-[var(--jet)] text-[#f1e7e8]",
};

export function Section({
  tone = "light",
  className,
  containerClassName,
  children,
  id,
}: {
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-[110px] max-[760px]:py-[76px]", toneClasses[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}