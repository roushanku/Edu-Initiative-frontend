import React from "react";
import { Twitter, Instagram, Facebook, Rss, Github } from "lucide-react";

const FooterSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerSections = [
    {
      title: "For Students",
      items: [
        "Find a Tutor",
        "Study Resources",
        "Learning Tips",
        "Success Stories",
        "Student Forum",
        "FAQ",
      ],
    },
    {
      title: "For Tutors",
      items: [
        "Become a Tutor",
        "Teaching Resources",
        "Tutor Handbook",
        "Professional Development",
        "Tutor Community",
      ],
    },
    {
      title: "Support",
      items: [
        "Help Center",
        "Contact Us",
        "Report an Issue",
        "Feedback",
        "Accessibility",
      ],
    },
    {
      title: "Company",
      items: [
        "About Us",
        "Our Mission",
        "Careers",
        "Press",
        "Blog",
        "Partners",
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">TutorConnect</h2>
            <p className="text-gray-600 mb-4">Terms · Privacy Policy</p>
          </div>
          {footerSections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2024 EduConnect. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <Rss size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
