import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ index, eyebrow, title, lede, align = "left", className }: Props) {
  return (
    <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <div
          className={cn("flex items-center gap-4", align === "center" && "justify-center")}
        >
          <span className="font-mono text-xs text-muted-foreground">{index}</span>
          <span className="h-px w-10 bg-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display-section mt-7">{title}</h2>
      </Reveal>
      {lede ? (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground",
              align === "center" && "mx-auto",
            )}
          >
            {lede}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
