// components/AboutLayout.tsx

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-4 py-8 md:py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl w-full">{children}</div>
    </section>
  );
}
