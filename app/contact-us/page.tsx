"use client";
import React, { useState } from "react";
import { title } from "@/components/Primitives";
import {
  Mail01Icon,
  MapPinIcon,
  Message01Icon,
  PhoneOff01Icon,
  Rocket01Icon,
} from "hugeicons-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="max-w-full mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information Card */}
          <div className="bg-white rounded-2xl shadow-md p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Have questions about our tutoring services? We're here to help!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-violet-100 rounded-xl p-4">
                    <PhoneOff01Icon className="h-7 w-7 text-violet-600" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-violet-100 rounded-xl p-4">
                    <Mail01Icon className="h-7 w-7 text-violet-600" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-medium">Email</p>
                  <p className="text-gray-600">support@tutorplatform.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-violet-100 rounded-xl p-4">
                    <MapPinIcon className="h-7 w-7 text-violet-600" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-medium">Address</p>
                  <p className="text-gray-600">
                    123 Education Street, Learning City
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-2xl shadow-md p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition duration-150"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet500 focus:border-violet500 transition duration150"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <select
                id="subject"
                name="expertise"
                onChange={handleChange}
                value={formData.subject}
                required
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Expertise</option>
                {["general", "tutoring", "technical", "billing"].map((exp) => (
                  <option key={exp} value={exp}>
                    {exp}
                  </option>
                ))}
              </select>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray700 font-medium mb2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="
                    w-full px4 py3 rounded-xl border bordergray300 focus:ring2 focus:ring-violet500 focus:border-violet500 transition duration150"
                  placeholder="How can we help you?"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className="w-full flex flex-row  justify-center gap-2 bg-slate-300 hover:bg-slate-600 hover:text-white text-black py-3 rounded-lg transition-colors"
              >
                <Message01Icon />
                Send message to us....
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
