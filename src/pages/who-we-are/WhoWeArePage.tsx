import { MainLayout } from "@/components/layout/MainLayout";

type WhoWeArePageProps = {
  title: string;
};

export function WhoWeArePage({ title }: WhoWeArePageProps) {
  return (
    <MainLayout>
      <section className="mx-auto flex min-h-[70vh] w-[min(1400px,92vw)] flex-col justify-center pt-40 pb-24">
        <p className="eyebrow">Who we are</p>
        <h1 className="mt-6 text-5xl font-medium text-foreground lg:text-6xl">{title}</h1>
      </section>
    </MainLayout>
  );
}
