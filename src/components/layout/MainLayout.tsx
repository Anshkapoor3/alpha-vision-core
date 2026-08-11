import type { ReactNode } from "react";
import { Nav } from "@/components/alpha/Nav";
import { Footer } from "@/components/alpha/Footer";
import { cn } from "@/lib/utils";

type MainLayoutProps = {
  children: ReactNode;
  mainClassName?: string;
};

export function MainLayout({ children, mainClassName }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main className={cn("min-h-screen", mainClassName)}>{children}</main>
      <Footer />
    </div>
  );
}
