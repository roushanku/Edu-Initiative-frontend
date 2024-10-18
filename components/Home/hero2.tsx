import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Unlock Your Full Potential with World-Class Learning{" "}
          <span className="text-purple-500">Education</span> + Tailwind CSS
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore courses, expert guidance, and resources designed to help you
          excel in your academic and career journey.
        </p>
        <div className="space-x-4">
          <Link
            href="/get-template"
            className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition duration-300"
          >
            Get template
          </Link>
          <Link
            href="/learn-more"
            className="bg-white text-gray-800 px-6 py-3 rounded-md font-semibold border border-gray-300 hover:bg-gray-100 transition duration-300"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
