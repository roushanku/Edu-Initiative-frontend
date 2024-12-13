import { title } from "@/components/Primitives";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-4 py-8 md:py-10">
      <h1 className={title()}>Contact Us</h1>
      <div>{children}</div>
    </section>
  );
}
