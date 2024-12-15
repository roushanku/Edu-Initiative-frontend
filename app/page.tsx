import Note from "@/components/widgets/Note";
import Features from "@/components/Home/Features/features";
import EducationComponents from "@/components/services/educatoin_components";
import FAQ from "@/components/FAQ";
import { Divider } from "@nextui-org/react";
import HomePageHeader from "@/components/Home/Header";
import FindTutorGuide from "@/components/FindTutor";
import InfoBar from "@/components/information_bar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Home/HeroSection";
import TeacherCard from "@/components/Home/TutorCard";
import TopTeachers from "@/components/TopTeachers";
import WhyUscard from "@/components/Home/WhyUsCars";

export default function Home() {
  return (
    <>
      {/* <HomePageHeader /> */}
      <HeroSection />
      <TopTeachers />
      <Features />
      <EducationComponents />
      <FindTutorGuide />
      <Note />
      <FAQ />
      <InfoBar />
      <Divider className="mt-0.5 mb-0.5" />
      <Footer />
    </>
  );
}
