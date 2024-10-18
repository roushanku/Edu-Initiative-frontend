import React from "react";

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4 mb-8">
    <div className="bg-blue-600 rounded-full p-3 text-white w-20 h-10 flex justify-center ">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  </div>
);

export default function Features() {
  const features = [
    {
      icon: "👥",
      title: "Seamless Tutor-Student Matching",
      description:
        "Our platform uses advanced algorithms to connect students with the most suitable tutors based on subject, level, and learning style.",
    },
    {
      icon: "🎓",
      title: "Customized Learning Experiences",
      description:
        "Tutors can create personalized lesson plans and materials tailored to each students needs and goals.",
    },
    {
      icon: "💻",
      title: "Interactive Virtual Classrooms",
      description:
        "Enjoy high-quality video calls, screen sharing, and collaborative whiteboards for effective online learning.",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description:
        "Both tutors and students can monitor learning progress, set goals, and track improvements over time.",
    },
    {
      icon: "🔒",
      title: "Secure and User-Friendly",
      description:
        "Our platform prioritizes data protection while offering an intuitive interface for easy navigation and scheduling.",
    },
    {
      icon: "💡",
      title: "Continuous Improvement",
      description:
        "We regularly update our platform based on user feedback to enhance the learning experience for both tutors and students.",
    },
  ];

  return (
    <div className="w-full bg-slate-100">
      <div className="py-16 px-4 max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-2">FEATURES</h2>
        <h1 className="text-5xl font-bold text-center mb-4">
          What you get with TutorConnect
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          The ultimate platform for connecting passionate tutors with eager
          learners. Empowering educational growth through personalized,
          interactive experiences.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
