import React from "react";
import { ChevronRight } from "lucide-react";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <div className="mb-6">
    <h3 className="flex items-center text-lg font-semibold mb-2">
      <ChevronRight className="text-blue-500 mr-2" />
      {question}
    </h3>
    <p className="text-gray-600 ml-6">{answer}</p>
  </div>
);

const FAQ = () => {
  const faqs = [
    {
      question: "Why choose our tutoring platform?",
      answer:
        "Our platform offers a unique blend of qualified tutors, interactive learning tools, and personalized matching algorithms. We're committed to enhancing the learning experience for students of all ages and levels.",
    },
    {
      question: "What do I need to get started?",
      answer:
        "To begin, you'll need a computer or mobile device with internet access, a valid email address, and a passion for learning or teaching. Our platform is designed to be user-friendly, so no special technical skills are required.",
    },
    {
      question: "How do I find the right tutor?",
      answer:
        "Our advanced matching system considers factors such as subject expertise, teaching style, availability, and student goals to suggest the most suitable tutors. You can also browse tutor profiles and reviews to make an informed choice.",
    },
    {
      question: "What subjects are offered?",
      answer:
        "We cover a wide range of subjects including mathematics, sciences, languages, humanities, and test preparation. If you don't see a specific subject listed, please contact us, and we'll try to find a qualified tutor for you.",
    },
    {
      question: "How do online sessions work?",
      answer:
        "Online sessions take place in our virtual classroom, which includes video conferencing, an interactive whiteboard, and screen sharing capabilities. You can communicate in real-time, share documents, and even record sessions for later review.",
    },
    {
      question: "What if I'm not satisfied with a session?",
      answer:
        "Your satisfaction is our priority. If you're not happy with a session, please contact our support team. We offer a satisfaction guarantee and will work with you to resolve any issues, including finding a new tutor if necessary.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-slate-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
          FAQS
        </h2>
        <h1 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Dive into the following questions to gain insights into our powerful
          tutoring platform and how it can elevate your learning journey.
        </p>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
