import Image from "next/image";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { InformationSquareIcon, TeacherIcon } from "hugeicons-react";
import { subtitle, title } from "../Primitives";
import { button as buttonStyles } from "@nextui-org/theme";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
        <div className="inline-block max-w-5xl mt-20 text-center justify-center z-10">
          <span className={title({ size: "lg" })}>Empowering&nbsp;</span>
          <span className={title({ color: "violet", size: "lg" })}>
            Education&nbsp;
          </span>
          <br />
          <span className={title({ size: "lg" })}>
            Through Innovative Solutions.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Leveraging my education in Computer Science, I aim to bridge the gap
            between technology and education, enabling students and educators to
            thrive in a digital world.
          </div>
        </div>

        {/* <Hero /> */}
        <div className="flex gap-3 z-10 mb-20">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "md",
              variant: "shadow",
              size: "lg",
            })}
            href={siteConfig.links.docs}
          >
            <TeacherIcon size={20} />
            Hire Tutor
          </Link>
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "md",
              variant: "shadow",
              size: "lg",
            })}
            href={siteConfig.links.github}
          >
            <InformationSquareIcon size={20} />
            Know More
          </Link>
        </div>
        {/* <Image
          src="/heroImage.jpg"
          alt="Tutor and student in a virtual classroom"
          layout="responsive"
          width={1920} // Set a ratio-based width
          height={1000} // Set a ratio-based height
          className="rounded-lg shadow-lg w-full"
        /> */}
      </section>
    </>
  );
};

export default HeroSection;
