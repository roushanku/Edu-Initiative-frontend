import Image from "next/image";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
  InformationDiamondIcon,
  InformationSquareIcon,
  TeacherIcon,
} from "hugeicons-react";
import HomePageHeader from "@/components/Home/header";
import Note from "@/components/widgets/Note";

import InfoBar from "@/components/information_bar";

export default function Home() {
  return (
    <>
      <HomePageHeader />
      {/* <HeroSection /> */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
        <div className="inline-block max-w-3xl text-center justify-center z-10">
          <span className={title()}>Empowering&nbsp;</span>
          <span className={title({ color: "violet" })}>Education&nbsp;</span>
          <br />
          <span className={title()}>Through Innovative Solutions.</span>
          <div className={subtitle({ class: "mt-4" })}>
            Leveraging my education in Computer Science, I aim to bridge the gap
            between technology and education, enabling students and educators to
            thrive in a digital world.
          </div>
        </div>

        <div className="flex gap-3 z-10">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "md",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            <TeacherIcon size={20} />
            Hire Tutor
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "md" })}
            href={siteConfig.links.github}
          >
            <InformationSquareIcon size={20} />
            Know More
          </Link>
        </div>

        <InfoBar/>

        <div className="m-auto max-w-5xl mt-3 overflow-hidden">
          <Image
            className="mx-auto rounded-md w-full"
            sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px"
            loading="eager"
            width={1024}
            height={576}
            src="/hero-image-2.jpg"
            alt={""}
          />
        </div>
      </section>
      <Note />
    </>
  );
}
