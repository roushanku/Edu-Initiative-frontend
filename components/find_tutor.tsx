import React from "react";
import { Search, UserPlus, Calendar, CheckCircle } from "lucide-react";
import Image from "next/image";

const Step = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="flex items-start mb-8">
    <div className="bg-blue-100 rounded-full p-3 mr-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FindTutorGuide = () => {
  const steps = [
    {
      icon: Search,
      title: "Step 1: Search for a tutor",
      description:
        "Use our advanced search feature to find tutors based on subject, level, availability, and teaching style. Filter results to match your specific learning needs.",
    },
    {
      icon: UserPlus,
      title: "Step 2: Review profiles",
      description:
        "Explore tutor profiles, including their qualifications, experience, and student reviews. Our detailed profiles help you make an informed decision about who's right for you.",
    },
    {
      icon: Calendar,
      title: "Step 3: Schedule a session",
      description:
        "Once you've found a great match, book your first session directly through our platform. Choose a time that works for both you and your tutor.",
    },
    {
      icon: CheckCircle,
      title: "Ready to learn!",
      description:
        "Prepare for your session and get ready to boost your knowledge. Remember, you can always provide feedback and schedule future sessions through our platform.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl font-bold mb-4">
            Find your perfect tutor in no time with our platform.
          </h1>
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className="md:w-1/2">
          <Image
            src="/heroImage.jpg"
            alt="Tutor and student in a virtual classroom"
            layout="responsive"
            width={1920} // Set a ratio-based width
            height={1000} // Set a ratio-based height
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FindTutorGuide;
