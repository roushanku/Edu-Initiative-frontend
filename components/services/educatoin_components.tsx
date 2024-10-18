import React from "react";
import {
  Book,
  Users,
  Calendar,
  VideoIcon,
  MessageSquare,
  Award,
  Clipboard,
  User,
  Home,
} from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function EducationComponents() {
  const features = [
    {
      icon: Book,
      title: "Lesson Plans",
      description:
        "Customizable lesson templates to structure your tutoring sessions effectively.",
    },
    {
      icon: Users,
      title: "Tutor Matching",
      description:
        "Smart algorithm to connect students with the perfect tutor for their needs.",
    },
    {
      icon: Calendar,
      title: "Scheduling",
      description:
        "Easy-to-use calendar for booking and managing tutoring sessions.",
    },
    {
      icon: VideoIcon,
      title: "Virtual Classroom",
      description:
        "Interactive online space for seamless remote learning experiences.",
    },
    {
      icon: MessageSquare,
      title: "Messaging",
      description:
        "Secure in-app communication between tutors, students, and parents.",
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description:
        "Tools to set goals, track achievements, and celebrate student success.",
    },
    {
      icon: Clipboard,
      title: "Resources Library",
      description:
        "Shared repository of educational materials and study guides.",
    },
    {
      icon: User,
      title: "Student Profiles",
      description:
        "Comprehensive profiles to understand each learner's unique needs.",
    },
    {
      icon: Home,
      title: "Dashboard",
      description:
        "Centralized hub for managing all aspects of the tutoring experience.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
          COMPONENTS
        </h2>
        <h1 className="text-4xl font-bold text-center mb-4">
          Essential Education Features
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Empowering tools for an enhanced tutoring and learning experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
