// app/about/page.tsx

"use client";
import { title } from "@/components/Primitives";

export default function AboutPage() {
  return (
    <div className="p-6 mx-auto bg-white shadow-md rounded-lg">
      <h1 className={`${title()} text-center text-blue-600 mb-6`}>About Us</h1>
      <section className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At{" "}
              <span className="text-blue-500 font-semibold">
                [Your Platform Name]
              </span>
              , we are dedicated to bridging the gap between passionate tutors
              and eager learners. Our mission is to provide personalized,
              high-quality educational experiences to help students achieve
              their goals.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2 text-gray-800">What We Do</h2>
            <p className="text-gray-600 leading-relaxed">
              We connect students with verified, skilled tutors for a variety of
              subjects and levels. Whether you need help with academics, test
              preparation, or skill development, our platform ensures a seamless
              booking experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <span className="font-semibold text-blue-500">
                  Verified and experienced tutors:
                </span>{" "}
                Experts for all subjects.
              </li>
              <li>
                <span className="font-semibold text-blue-500">
                  Flexible scheduling:
                </span>{" "}
                Tailored to your convenience.
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <span className="font-semibold text-blue-500">
                  Secure process:
                </span>{" "}
                Hassle-free booking experience.
              </li>
              <li>
                <span className="font-semibold text-blue-500">
                  Personalized plans:
                </span>{" "}
                For each student.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our team is composed of education enthusiasts, tech innovators,
              and support professionals committed to enhancing your learning
              experience.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              Testimonials
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 bg-gray-50 text-gray-600 italic leading-relaxed">
              "This platform has been a game-changer for my child’s learning.
              The tutors are amazing, and the process is so easy!"
              <span className="block mt-4 text-right font-bold text-blue-500">
                {" "}
                - A Happy Parent
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <p className="text-gray-600 leading-relaxed">
            Have questions or need help? Reach out to us at
            <a
              href="mailto:support@hometutorplatform.com"
              className="text-blue-500 underline"
            >
              {" "}
              support@hometutorplatform.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
