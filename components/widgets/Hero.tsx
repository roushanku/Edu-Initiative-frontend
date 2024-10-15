import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { Button } from "@nextui-org/button";

type Action = {
  variant?: string;
  text: string;
  href: string;
  target?: string;
  icon?: string;
  [key: string]: any; // Add other props that Button might accept
};

interface HeroProps {
  title?: React.ReactNode; // Accept React nodes for title
  subtitle?: React.ReactNode; // Accept React nodes for subtitle
  tagline?: string;
  content?: string;
  actions?: Action[] | string; // Can be an array of Action objects or a string of HTML
  image?: string | { src: string; alt?: string; [key: string]: any }; // Can be an HTML string or an object for the Image component
  id?: string;
  bg?: string; // Background HTML string
  children: any;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  tagline,
  content,
  actions,
  image,
  id,
  bg,
  children,
}) => {
  return (
    <section
      className={`relative md:-mt-[76px] not-prose ${id ? `id=${id}` : ""}`}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {bg && <div dangerouslySetInnerHTML={{ __html: bg }} />}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div className="py-12 md:py-20">
          <div className="text-center pb-10 md:pb-16 max-w-5xl mx-auto">
            {tagline && (
              <p
                className="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
                dangerouslySetInnerHTML={{ __html: tagline }}
              />
            )}
            {title && (
              <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
                {title}
              </h1>
            )}
            <div className="max-w-3xl mx-auto">
              {subtitle && (
                <p className="text-xl text-muted mb-6 dark:text-slate-300 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
                  {subtitle}
                </p>
              )}
              {actions && (
                <div className="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
                  {Array.isArray(actions) ? (
                    actions.map((action, index) => (
                      <div key={index} className="flex w-full sm:w-auto">
                        <Button className="w-full sm:mb-0" />
                      </div>
                    ))
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: actions }} />
                  )}
                </div>
              )}
            </div>
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
            {children} {/* Render children for additional content */}
          </div>
          <div className="intersect-once intersect-no-queue intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
            {image && (
              <div className="relative m-auto max-w-5xl">
                {typeof image === "string" ? (
                  <div dangerouslySetInnerHTML={{ __html: image }} />
                ) : (
                  <Image
                    className="mx-auto rounded-md w-full"
                    src={image.src} // Use src from image object
                    alt={image.alt || "Image"} // Use alt text from image object or fallback
                    width={1024} // Set width
                    height={576} // Set height
                    layout="responsive" // Adjust layout for responsive images
                    sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px" // Add sizes for responsive loading
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
